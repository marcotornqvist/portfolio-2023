'use client';

import React, { FC } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface IProps {
  children: React.ReactNode;
}

const RecaptachaProvider: FC<IProps> = ({ children }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecaptachaProvider;
