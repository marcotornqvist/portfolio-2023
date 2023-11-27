import ContactForm from 'components/contact-form';
import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import RecaptachaProvider from 'components/recaptcha-provider';

type Item = {
  icon: string;
  alt: string;
  text: string;
  link?: string;
};

const Contact: FC = () => {
  const styles = clsx('flex items-center gap-3');

  return (
    <div className="container flex flex-col gap-[5%] py-16 md:py-24 lg:flex-row lg:py-28">
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
                <div className="flex h-6 w-6">
                  <Image
                    src="/assets/icons/inbox.svg"
                    alt="mailbox icon"
                    height={16}
                    width={20}
                  />
                </div>
                <span className="text-regular-normal">
                  marcotornqvist@gmail.com
                </span>
              </a>
            </li>
            <li>
              <a href="tel:+358440223519" className={styles}>
                <div className="flex h-6 w-6">
                  <Image
                    src="/assets/icons/phone.svg"
                    alt="phone icon"
                    height={19}
                    width={19}
                  />
                </div>
                <span className="text-regular-normal">+358 440 223 519</span>
              </a>
            </li>
            <li>
              <div className={styles}>
                <div className="flex h-6 w-6">
                  <Image
                    src="/assets/icons/map.svg"
                    alt="map icon"
                    height={20}
                    width={16}
                  />
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
