import type { StaticImageData } from 'next/image';
import luontoonImage from 'public/assets/images/luontoon.png';
import amplifilesImage from 'public/assets/images/amplifiles.png';
import travaruhusetImage from 'public/assets/images/travaruhuset.png';
import ekeMarinImage from 'public/assets/images/eke-marin-current.png';

export type Project = {
  title: string;
  category: string;
  description: string;
  url: string;
  image: StaticImageData;
  tone: string;
};

export const projects: Project[] = [
  {
    title: 'Luontoon.fi',
    category: 'Outdoor recreation',
    description:
      'A gateway to Finland’s outdoors. Discover national parks, find hiking trails, and plan your next adventure with destinations and routes in one place.',
    url: 'https://www.luontoon.fi/en',
    image: luontoonImage,
    tone: 'sage',
  },
  {
    title: 'Amplifiles',
    category: 'AI-powered video',
    description:
      'Turning property photos into engaging real estate videos. An AI-powered platform that makes professional video creation faster and more accessible.',
    url: 'https://www.amplifiles.ai/',
    image: amplifilesImage,
    tone: 'lavender',
  },
  {
    title: 'Trävaruhuset',
    category: 'Retail & building materials',
    description:
      'A digital home for a local building-materials specialist in Ekenäs. Explore products, discover services, and find the right support for your next building project.',
    url: 'https://www.travaruhuset.com/sv',
    image: travaruhusetImage,
    tone: 'sand',
  },
  {
    title: 'Eke-marin',
    category: 'Marine services',
    description:
      'A website renewal for a full-service marina. Bringing boat docking, storage, maintenance, and crane-lifting services together in a clear, approachable experience.',
    url: 'https://www.eke-marin.fi/fi',
    image: ekeMarinImage,
    tone: 'blue',
  },
];

export type ResumeEntry = {
  organization: string;
  title?: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
};

export const experience: ResumeEntry[] = [
  {
    organization: 'Amplifiles',
    title: 'Software Developer',
    start: 'Nov 2025',
    end: 'Present',
    location: 'Finland · Full-time',
    description:
      'Building an AI-powered platform that turns property photos into engaging real estate videos, making professional video creation faster and more accessible.',
  },
  {
    organization: 'Freelance Software Developer',
    start: 'Jan 2023',
    end: 'Present',
    location: 'Finland · Remote',
    description:
      'Designing and developing accessible websites, from smaller client projects to supporting work for larger clients.',
  },
  {
    organization: 'Vincit',
    title: 'Software Developer',
    start: 'Apr 2022',
    end: 'Nov 2025',
    location: 'Helsinki, Finland · Full-time',
    description:
      'Built public-sector services and e-commerce experiences using Next.js, TypeScript, GraphQL, Mapbox, and headless CMS platforms. I also collaborated closely with clients and conducted technical interviews for engineering roles.',
  },
  {
    organization: 'Finnish Defence Forces',
    title: 'Virtual Teaching Assistant',
    start: 'Aug 2019',
    end: 'Mar 2020',
    location: 'Raseborg, Finland',
    description:
      'Developed React web applications that supported virtual teaching and learning within the Finnish Defence Forces.',
  },
];

export const education: ResumeEntry[] = [
  {
    organization: 'Arcada University of Applied Sciences',
    title: 'Bachelor of Engineering, Information Technology',
    start: '2018',
    end: '2022',
    description:
      'Built a foundation in software engineering with a focus on machine learning, web development, data analytics, and entrepreneurship.',
  },
];
