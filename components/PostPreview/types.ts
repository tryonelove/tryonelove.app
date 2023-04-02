import { DateTime } from 'luxon';

export type PostPreviewItem = {
  title: string;
  description: string;
  link: string;
  date: DateTime;
};

export type PostPreviewItemSerializable = Omit<PostPreviewItem, 'date'> & {
  isoDate: string;
};
