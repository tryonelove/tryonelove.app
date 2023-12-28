import { DateTime } from 'luxon';
import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineItemHeader,
  TimelineItemTitle,
  TimelineItemSubtitle,
  TimelineItemPeriod,
  TimelineItemDescription,
} from './timeline';
import { orderBy } from 'lodash-es';

export type WorkExperienceItem = {
  company: string;
  link?: string;
  position: string;
  description: string;
  startDate: DateTime;
  endDate?: DateTime;
};

interface WorkExperienceTimelineProps {
  items: WorkExperienceItem[];
}

const getExperienceItemKey = (item: WorkExperienceItem) =>
  `${
    item.company
  } ${item.startDate.toUnixInteger()} ${item.endDate?.toUnixInteger()}`;

export function WorkExperienceTimeline({ items }: WorkExperienceTimelineProps) {
  const orderedItems = orderBy(
    items,
    (i) => i.startDate.toUnixInteger(),
    'desc'
  );

  return (
    <Timeline>
      {orderedItems.map((item) => (
        <TimelineItem key={getExperienceItemKey(item)}>
          <TimelineItemHeader>
            <div>
              <TimelineItemTitle link={item.link}>
                {item.company}
              </TimelineItemTitle>
              <TimelineItemSubtitle>{item.position}</TimelineItemSubtitle>
            </div>
            <TimelineItemPeriod
              startDate={item.startDate}
              endDate={item.endDate}
            />
          </TimelineItemHeader>
          <TimelineItemDescription>{item.description}</TimelineItemDescription>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
