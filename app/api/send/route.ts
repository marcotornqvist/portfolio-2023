import { SES, SendEmailCommand } from '@aws-sdk/client-ses';
import { sesClient } from 'lib/sesClient';
import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { EmailTemplate } from 'components/email/email';
import React from 'react';

// const resend = new Resend(process.env.RESEND_API_KEY);
const ses = new SES({ region: process.env.AWS_SES_REGION });

export async function POST() {
  const firstName = 'John';

  const params = new SendEmailCommand({
    Destination: {
      CcAddresses: [],
      ToAddresses: [process.env.EMAIL_TO as string],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: render(EmailTemplate({ firstName }) as any, {
            pretty: true,
          }),
        },
        Text: {
          Charset: 'UTF-8',
          Data: render(EmailTemplate({ firstName }) as any, {
            plainText: true,
          }),
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Now testing`,
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
