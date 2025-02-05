import { Github, Linkedin, Mail, MailIcon, MapPin } from 'lucide-react';
import { Section, SectionTitle } from '../components/ui/section';
import { SecondaryText } from '../components/ui/text';
import Image from 'next/image';
import avatar from 'public/avatar.jpg';
import { ContactIconButton } from '../components/ui/contact';
import {
  Timeline,
  TimelineItem,
  TimelineItemDescription,
  TimelineItemHeader,
  TimelineItemPeriod,
  TimelineItemTitle,
} from '@/components/ui/timeline';
import { workExperienceItems } from '../work-experience-items';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { WorkExperienceTimeline } from '@/components/ui/work-experience-timeline';
import { DateTime } from 'luxon';

export default function Home() {
  return (
    <main className='container mx-auto flex flex-col gap-8 py-24 md:max-w-screen-md'>
      <div className='flex justify-between'>
        <Section>
          <div className='flex items-center gap-2'>
            <SectionTitle>Ilya Zdanovich</SectionTitle>
            <ThemeToggle className='opacity-15 transition-opacity hover:opacity-50' />
          </div>
          <div className='flex flex-col gap-1'>
            <SecondaryText>
              Frontend Software engineer focused on building intuitive user
              interfaces
            </SecondaryText>
            <Button
              className='w-fit p-0'
              variant='link'
              asChild
            >
              <Link
                href='https://www.google.com/maps/place/Warsaw,+Poland'
                target='blank'
              >
                <SecondaryText className='flex items-center gap-1 text-sm'>
                  <MapPin className='h-4 w-4 stroke-1' />
                  Warsaw, Poland
                </SecondaryText>
              </Link>
            </Button>
          </div>
          <div className='flex gap-1'>
            <ContactIconButton
              icon={MailIcon}
              href='mailto:ilya.zdanovich@proton.me'
            />
            <ContactIconButton
              icon={Github}
              href='https://github.com/tryonelove'
              target='_blank'
            />
            <ContactIconButton
              icon={Linkedin}
              href='https://www.linkedin.com/in/ilya-zdanovich/'
              target='_blank'
            />
          </div>
        </Section>
        <Image
          className='h-32 w-32 rounded-full object-cover'
          src={avatar}
          alt='Ilya Zdanovich'
        />
      </div>
      <Section>
        <SectionTitle>About</SectionTitle>
        <SecondaryText>
          As a Frontend Software Engineer, I bring over {DateTime.now().diff(DateTime.fromObject({ year: 2021 })).years} years of experience to
          the table, specializing in React, TypeScript, Next.js, HTML, and CSS.
          My commitment lies in crafting intuitive user interfaces that not only
          meet but exceed user expectations.
        </SecondaryText>
      </Section>
      <Section>
        <SectionTitle>Work experience</SectionTitle>
        <WorkExperienceTimeline items={workExperienceItems} />
      </Section>
      <Section>
        <SectionTitle>Education</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineItemHeader>
              <TimelineItemTitle>
                Belarusian State University of Informatics and Radioelectronics
              </TimelineItemTitle>
              <TimelineItemPeriod
                startDate={DateTime.fromObject({ year: 2018 })}
                endDate={DateTime.fromObject({ year: 2022 })}
              />
            </TimelineItemHeader>
            <TimelineItemDescription>
              Bachelor&apos;s Degree in Computer Engineering
            </TimelineItemDescription>
          </TimelineItem>
        </Timeline>
      </Section>
    </main>
  );
}
