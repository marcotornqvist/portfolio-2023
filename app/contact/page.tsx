import ContactForm from 'components/contact-form';
import React, { FC } from 'react';
import clsx from 'clsx';
import RecaptachaProvider from 'components/recaptcha-provider';
import InboxIcon from 'components/icons/inbox';
import PhoneIcon from 'components/icons/phone';
import MapIcon from 'components/icons/map';

const Contact: FC = () => {
  const styles = clsx('flex items-center gap-3');

  return (
    <div className="container flex flex-col gap-[5%] py-16 md:py-24 lg:flex-row lg:py-28">
      <div className="fixed inset-0 top-0 -z-50 animate-fade-in items-center px-5 py-24 opacity-0 [background:radial-gradient(125%_125%_at_30%_10%,#000_40%,#5C2AF4_100%)]" />
      <div className="flex-1 pb-12">
        <div className="mb-6 flex flex-col lg:mb-8">
          <span className="text-regular-normal mb-3 block lg:mb-4">
            Software Developer & Web Designer
          </span>
          <h1 className="text-heading-2 mb-5 lg:mb-6">Marco Törnqvist</h1>
          <p className="text-regular-normal max-w-prose md:text-medium-normal lg:max-w-[500px]">
            I'm always open to discussing ideas, projects, or any inquiries you
            might have. Feel free to get in touch.
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="mailto:marcotornqvist@gmail.com" className={styles}>
                <div className="flex h-6 w-6 items-center justify-center">
                  <InboxIcon aria-hidden />
                </div>
                <span className="text-regular-normal">
                  marcotornqvist@gmail.com
                </span>
              </a>
            </li>
            <li>
              <a href="tel:+358440223519" className={styles}>
                <div className="flex h-6 w-6 items-center justify-center">
                  <PhoneIcon aria-hidden />
                </div>
                <span className="text-regular-normal">+358 440 223 519</span>
              </a>
            </li>
            <li>
              <div className={styles}>
                <div className="flex h-6 w-6 items-center justify-center">
                  <MapIcon aria-hidden />
                </div>
                <span className="text-regular-normal">Southern Finland</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <RecaptachaProvider>
        <ContactForm />
      </RecaptachaProvider>
    </div>
  );
};

export default Contact;
