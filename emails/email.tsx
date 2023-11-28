import { FC } from 'react';
import * as z from 'zod';
import { ContactSchema } from 'lib/validationSchemas';

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import { siteConfig } from 'config/site';

export const EmailTemplate: FC<z.infer<typeof ContactSchema>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Head />
      {/* <Preview></Preview> */}
      <Tailwind
        config={{
          theme: {
            colors: {
              white: '#FFFFFF',
              black: '#000000',
              lightgrey: '#F4F4F4',
              grey: '#D9D9D9',
              eerieblack: '#111111',
              destructive: '#EF2820',
              purple: {
                DEFAULT: '#5C2AF4',
                hover: '#4F1EEB',
              },
            },
            borderRadius: {
              sm: '3px',
              md: '8px',
              lg: '12px',
              full: '9999px',
            },
          },
        }}
      >
        <Body>
          <Container>
            <Text>{message}</Text>
            <Hr />
            <Text>
              Name: {name}
              <br />
              Email: {email}
              <br />
              This email was sent from the contact form on {siteConfig.url}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
