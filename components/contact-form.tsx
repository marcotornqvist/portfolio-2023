'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState } from 'react';
import { ContactSchema } from 'lib/validationSchemas';
import Link from 'next/link';

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const [error, setError] = useState<string | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (formData: z.infer<typeof ContactSchema>) => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit');

    const res = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({ formData, gRecaptchaToken }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      // something went wrong, get the error message from the server
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      }
    } else {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} className="lg:min-h-[250px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <small className="text-small-normal mb-6">
          This site is protected by reCAPTCHA and the Google{' '}
          <Link
            href="https://policies.google.com/privacy"
            className="underline"
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </Link>{' '}
          apply.
        </small>
        <Button
          type="submit"
          variant={'secondary'}
          className="mt-2"
          disabled={
            form.formState.isSubmitting ||
            (form.formState.isSubmitSuccessful && !error)
          }
        >
          {form.formState.isSubmitting
            ? 'Sending...'
            : form.formState.isSubmitSuccessful && !error
            ? 'Sent!'
            : 'Submit'}
        </Button>
        {form.formState.isSubmitSuccessful && !error && (
          <span className="text-small-normal">
            Thanks for reaching out! I'll get back to you as soon as possible.
          </span>
        )}
        {error && <span className="text-destructive">{error}</span>}
      </form>
    </Form>
  );
};

export default ContactForm;
