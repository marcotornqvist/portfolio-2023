import { SendEmailCommand } from '@aws-sdk/client-ses';
import { sesClient } from 'lib/sesClient';
import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { EmailTemplate } from 'emails/email';
import { verifyRecaptcha } from 'lib/validateRecaptcha';
import { ContactSchema } from 'lib/validationSchemas';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

// TODO: Implement rate limiting with Vercel Redis KV: https://vercel.com/docs/storage/vercel-kv
// Implement later
// TOOD: Implement styling for email template, experiment in a separate repository: https://react.email/docs/getting-started/manual-setup
// TODO: Implement a success email route to the user
// TODO: Style the success email
// TODO: Implement marcotornqvist-no-reply@gmail.com instead of marcotornqvist.test@gmail.com
// TODO: Increase AWS ses sending quota for no-reply email: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html
// TODO: Implement a no-reply message for the no-reply email

export async function POST(req: Request) {
  const body = await req.json();
  const response = ContactSchema.safeParse(body.formData);

  // first check if the request is valid
  if (!response.success) {
    return NextResponse.json(
      {
        error: response.error,
      },
      {
        status: 400,
      },
    );
  }

  if (!(await verifyRecaptcha(body.gRecaptchaToken))) {
    return NextResponse.json(
      {
        error: 'Recaptcha failed',
      },
      {
        status: 400,
      },
    );
  }

  // Sanitize user data
  const sanitizedData = {
    name: DOMPurify.sanitize(response.data.name),
    email: DOMPurify.sanitize(response.data.email),
    message: DOMPurify.sanitize(response.data.message ?? ''),
  };

  const params = new SendEmailCommand({
    Destination: {
      CcAddresses: [],
      ToAddresses: [process.env.EMAIL_TO as string],
    },
    Message: {
      Body: {
        // TODO: Implement HTML email with tailwind styling. See: https://react.email/docs/getting-started/manual-setup
        // Html: {
        //   Charset: 'UTF-8',
        //   Data: render(EmailTemplate(sanitizedData) as any, {
        //     pretty: true,
        //   }),
        // },
        Text: {
          Charset: 'UTF-8',
          Data: render(EmailTemplate(sanitizedData) as any, {
            plainText: true,
          }),
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `New message from ${sanitizedData.name}`,
      },
    },
    Source: process.env.EMAIL_SENDER as string,
    ReplyToAddresses: [],
  });

  try {
    const result = await sesClient.send(params);
    console.log('Email sent:', result.MessageId);
    return NextResponse.json(
      {
        message: 'Email sent',
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
      },
    );
  }
}
