import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Section, SectionTitle } from '../components/ui/section';
import { SecondaryText } from '../components/ui/text';
import Image from 'next/image';
import avatar from 'public/avatar.png';
import { DateTime } from 'luxon';
import { ContactIconButton } from './components/contact';
import {
  Timeline,
  TimelineItem,
  TimelineItemDescription,
  TimelineItemHeader,
  TimelineItemPeriod,
  TimelineItemSubtitle,
  TimelineItemTitle,
} from '@/components/ui/timeline';

export default function Home() {
  return (
    <main className='container mx-auto flex flex-col gap-8 pt-24 md:max-w-screen-md'>
      <div className='flex justify-between'>
        <Section>
          <SectionTitle>Ilya Zdanovich</SectionTitle>
          <div className='flex flex-col gap-1'>
            <SecondaryText>
              Frontend Software engineer focused on building intuitive user
              interfaces
            </SecondaryText>
            <SecondaryText className='flex items-center gap-1 text-sm'>
              <MapPin className='h-4 w-4 stroke-1' />
              Warsaw, Poland
            </SecondaryText>
          </div>
          <div className='flex gap-1'>
            <ContactIconButton
              icon={Mail}
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
          className='h-32 w-32 rounded-lg'
          src={avatar}
          alt='Ilya Zdanovich'
        />
      </div>
      <Section>
        <SectionTitle>About</SectionTitle>
        <SecondaryText>
          As a Frontend Software Engineer, I bring over 3 years of experience to
          the table, specializing in React, TypeScript, Next.js, HTML, and CSS.
          My commitment lies in crafting intuitive user interfaces that not only
          meet but exceed user expectations.
        </SecondaryText>
      </Section>
      <Section>
        <SectionTitle>Work experience</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineItemHeader>
              <div>
                <TimelineItemTitle link='https://ventionteams.com'>
                  Vention
                </TimelineItemTitle>
                <TimelineItemSubtitle>
                  Frontend Software Engineer
                </TimelineItemSubtitle>
              </div>
              <TimelineItemPeriod
                startDate={DateTime.fromObject({ year: 2022 })}
              />
            </TimelineItemHeader>
            <TimelineItemDescription>
              I was responsible for developing and maintaining the core
              application of the company. I was also responsible for developing
              and maintaining the companys design system.
              <br />
              Technologies: React, Redux, TypeScript, React-Query
            </TimelineItemDescription>
          </TimelineItem>
          <TimelineItem>
            <TimelineItemHeader>
              <div>
                <TimelineItemTitle>iTechArt</TimelineItemTitle>
                <TimelineItemSubtitle>
                  Full-Stack Software Engineer
                </TimelineItemSubtitle>
              </div>
              <TimelineItemPeriod
                startDate={DateTime.fromObject({ year: 2021 })}
                endDate={DateTime.fromObject({ year: 2022 })}
              />
            </TimelineItemHeader>
            <TimelineItemDescription>
              I was responsible for developing and maintaining the core
              application of the company. I was also responsible for developing
              and maintaining the companys design system.
              <br />
              Technologies: .NET, Entity Framework, React, Redux, TypeScript
            </TimelineItemDescription>
          </TimelineItem>
        </Timeline>
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
