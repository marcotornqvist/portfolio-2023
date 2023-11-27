import { NextResponse } from 'next/server';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import { sesClient } from 'lib/sesClient';
import { verifyRecaptcha } from 'lib/validateRecaptcha';
import { ContactSchema } from 'lib/validationSchemas';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

// TODO: Implement this with resend or react email: https://resend.com/docs/send-with-nextjs
// TODO: Repo: https://github.com/resendlabs/resend-nextjs-app-router-example
// TODO: Blog Guide: https://dev.to/mayorstacks/sending-react-emails-using-nextjs-and-the-resend-sdk-sdk-19bd

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
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        process.env.EMAIL_TO as string,
        /* more To-email addresses */
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `Hello`,
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'TEXT_FORMAT_BODY',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Uusi viesti: ${sanitizedData.name}`,
      },
    },
    Source: process.env.EMAIL_SENDER as string,
    ReplyToAddresses: [
      /* more items */
    ],
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
