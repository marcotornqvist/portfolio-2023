'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: 'Marco Törnqvist',
      email: 'marcotornqvist@gmail.com',
      message: 'Hi. Could we talk some buziness?',
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
        className="flex flex-1 flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
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
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        {error && <span className="text-destructive">{error}</span>}
      </form>
    </Form>
  );
};

export default ContactForm;
