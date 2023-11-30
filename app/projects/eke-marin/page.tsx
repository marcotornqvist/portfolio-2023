import Content from 'components/content';
import CTA from 'components/cta';
import Header from 'components/header';
import PortfolioHeader from 'components/portfolio-header';
import Heading from 'components/ui/heading';
import React, { FC } from 'react';

const Project: FC = () => {
  return (
    <>
      <Header
        title="Eke-marin"
        subtitle={
          <>
            Website renewal for Eke-marin. A comprehensive boat docking,
            storage, maintenance and crane lifting service business.
          </>
        }
        buttonText="Live Site"
        buttonLink="https://eke-marin.fi/"
        headingLevel="h1"
        className="py-16 md:py-24 lg:py-28"
      />
      <PortfolioHeader
        tags={[
          'Figma',
          'NextJS 13 App Dir',
          'TypeScript',
          'Tailwind CSS',
          'Radix UI',
          'AWS SES',
          'Vercel',
          'Accessibility',
        ]}
      />
      <Content>
        <Heading headingLevel="h2" className="text-heading-3 w-full">
          Boosting Online Visibility: A Boat & Crane Service Website Revamp
        </Heading>
        <div className="flex flex-col gap-6 md:gap-8 lg:min-w-[55%]">
          <p className="text-regular-normal max-w-prose md:text-medium-normal">
            A longstanding comprehensive boat docking, storage, and maintenance
            business, faced significant digital hurdles. The previous website,
            while reflecting the company's rich history, had become increasingly
            dated in both appearance and functionality. It struggled with lower
            performance in key online metrics, such as search engine
            optimization (SEO), which significantly limited its visibility in
            online searches. This issue somewhat hindered the attraction of new
            customers, in spite of the strong and steadfast support from the
            existing client base.
          </p>
          <p className="text-regular-normal max-w-prose md:text-medium-normal">
            The primary goal of the website renewal was straightforward yet
            profound: boost marketing outreach and drive customer engagement,
            culminating in increased sales. To achieve this, the website needed
            not only to provide information but to serve as an inviting portal
            for potential clients to establish contact and avail the business's
            services.
          </p>
        </div>
      </Content>
      <Content>
        <Heading headingLevel="h2" className="text-heading-3 w-full">
          Process & Strategy
        </Heading>
        <div className="flex flex-col gap-6 md:gap-8 lg:min-w-[55%]">
          <p className="text-regular-normal max-w-prose md:text-medium-normal">
            <strong>Understanding the Business:</strong> While I was given
            considerable creative freedom in the design and development of the
            site, it was essential to prioritize and highlight the company's
            core offerings. This profound understanding became the bedrock upon
            which the revamped site was built, ensuring the primary services
            were effectively showcased.
          </p>
          <p className="text-regular-normal max-w-prose md:text-medium-normal">
            <strong>Design Considerations:</strong> Rather than reinventing the
            wheel, the focus was kept on clarity. Adhering to the brand's
            existing colors and style ensured consistency and immediate brand
            recognition.
          </p>
          <p className="text-regular-normal max-w-prose md:text-medium-normal">
            <strong>Integrations & Features:</strong> One of the standout
            features was the inclusion of three custom contact forms, tailored
            for distinct use cases. The Crane Booking Form, Storage Booking
            Form, and General Contact Form. Each form was meticulously designed
            to capture specific information, showcasing the site's versatility
            in addressing varied client needs and streamlining operations.
          </p>
        </div>
      </Content>
      <Content>
        <Heading headingLevel="h2" className="text-heading-3 w-full">
          Results
        </Heading>
        <div className="flex flex-col gap-6 md:gap-8 lg:min-w-[55%]">
          <p className="text-regular-normal max-w-prose md:text-medium-normal">
            The website renewal led to tangible positive outcomes for the
            business. There was a noticeable increase in the website's web
            traffic. The refreshed design not only brought the business's
            digital presence up-to-date but also resonated with visitors,
            fostering a sense of trust and professionalism. While there’s always
            room for growth and learning, the initial feedback suggests that the
            revamped website aligns well with the company's vision and the needs
            of its clients.
          </p>
        </div>
      </Content>
      <Content>
        <Heading headingLevel="h2" className="text-heading-3 w-full">
          Conclusion
        </Heading>
        <div className="flex flex-col gap-6 md:gap-8 lg:min-w-[55%]">
          <p className="text-regular-normal max-w-prose md:text-medium-normal">
            This project underscores the importance of a well-structured, clear,
            and user-friendly website in enhancing a business's digital
            footprint. By simply aligning the site's design with the company's
            core services and brand identity, and adding straightforward
            features like a contact form, businesses can significantly enhance
            their online engagement and drive growth.
          </p>
        </div>
      </Content>
      <CTA
        title="Ready for a Digital Transformation?"
        buttonText="Contact Me"
        buttonLink="/contact"
        headingLevel="h3"
        buttonClassName="justify-center"
        className="text-center"
      />
    </>
  );
};

export default Project;
