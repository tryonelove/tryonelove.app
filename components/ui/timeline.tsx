import React, { ReactNode } from 'react';
import { SecondaryText, Text } from './text';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { Button } from './button';

interface TimelineItemPeriodProps {
  startDate: DateTime;
  endDate?: DateTime;
}

export function TimelineItemPeriod({
  startDate,
  endDate,
}: TimelineItemPeriodProps) {
  return (
    <SecondaryText>
      {startDate.year} - {endDate ? endDate.year : 'Present'}
    </SecondaryText>
  );
}

interface TimelineItemTitleProps {
  children: ReactNode;
  link?: string;
}

export function TimelineItemTitle({ children, link }: TimelineItemTitleProps) {
  if (!link) {
    return <Text className='h-auto p-0 font-semibold'>{children}</Text>;
  }

  return (
    <Button
      className='h-auto p-0 font-semibold'
      variant='link'
      asChild={!!link}
    >
      <Link href={link}>{children}</Link>
    </Button>
  );
}

interface TimelineItemSubtitleProps {
  children: string;
}

export function TimelineItemSubtitle({ children }: TimelineItemSubtitleProps) {
  return <Text className='text-sm'>{children}</Text>;
}

interface TimelineItemHeaderProps {
  children: ReactNode;
}

export function TimelineItemHeader({ children }: TimelineItemHeaderProps) {
  return <div className='flex justify-between'>{children}</div>;
}

interface TimelineItemDescriptionProps {
  children: ReactNode;
}

export function TimelineItemDescription({
  children,
}: TimelineItemDescriptionProps) {
  return <SecondaryText>{children}</SecondaryText>;
}

interface TimelineItemProps {
  children: ReactNode;
}

export function TimelineItem({ children }: TimelineItemProps) {
  return <div className='flex flex-col gap-1'>{children}</div>;
}

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return <div className='flex flex-col gap-2'>{children}</div>;
}
