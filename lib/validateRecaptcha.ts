export const verifyRecaptcha = async (gRecaptchaToken: string) => {
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gRecaptchaToken}`,
    },
  );

  const data = await response.json();
  console.log(data);

  if (data.score > 0.5) {
    console.log('recaptcha success');
    return true;
  }

  console.log('recaptcha failed');
  return false;
};
