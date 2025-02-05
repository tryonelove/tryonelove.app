import { WorkExperienceItem } from '@/components/ui/work-experience-timeline';
import { DateTime } from 'luxon';

export const workExperienceItems: WorkExperienceItem[] = [
  {
    company: 'Grid Dynamics',
    position: 'UI Engineer',
    link: 'https://ventionteams.com',
    startDate: DateTime.fromObject({ year: 2024 }),
    endDate: DateTime.fromObject({ year: 2025 }),
    description: `
      Designed and built an AI-driven B2B analytics platform from scratch, helping marketing researchers make
data-driven decisions to optimize marketing strategies.
    `,
  },
  {
    company: 'Vention',
    position: 'Frontend Software Engineer',
    link: 'https://ventionteams.com',
    startDate: DateTime.fromObject({ year: 2022 }),
    endDate: DateTime.fromObject({ year: 2024 }),
    description: `
      Developed a a platform to help managers and employees communicate and collaborate more effectively.
      Led the implementation of reporting tool for employees to conveniently report their work and reduce taxes.
      Adopted TypeScript, React-Query to improve the developer experience and code quality.
    `,
  },
  {
    company: 'iTechArt',
    position: 'Full-Stack Sftware Engineer',
    startDate: DateTime.fromObject({ year: 2021 }),
    endDate: DateTime.fromObject({ year: 2022 }),
    description: `
      Developed a Surveys tool allowing users to design, capture data, share and analyze surveys.
      Implemented visualization tools for displaying the current company state regarding dismissals,
      new projects and personnel dynamics.
      Designed API and implemented frontnend using Next.js and ASP.NET Core API
    `,
  },
];
