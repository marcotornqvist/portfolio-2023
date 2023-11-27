import { FC } from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

type EmailTemplateProps = {
  firstName: string;
};

export const EmailTemplate: FC<EmailTemplateProps> = ({ firstName }) => {
  // const { url } = props;

  return (
    <Html>
      <Button>Hi, {firstName}</Button>
    </Html>
  );
};
