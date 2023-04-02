import { DateTime } from 'luxon';
import { PostPreviewItem, PostPreviewItemSerializable } from './types';

type PostPreviewItemFactory = (
  title: string,
  description: string,
  link: string,
  date: DateTime
) => PostPreviewItem;

type PostPreviewItemSerializableFactory = (
  title: string,
  description: string,
  link: string,
  date: DateTime
) => PostPreviewItemSerializable;

type PostPreviewItemFromSerializable = (
  title: string,
  description: string,
  link: string,
  isoDate: string
) => PostPreviewItem;

export const createPostPreviewItemSerializable: PostPreviewItemSerializableFactory =
  (title, description, link, date) => ({
    title,
    description,
    link,
    isoDate: date.toISO(),
  });

export const createPostPreviewItem: PostPreviewItemFactory = (
  title,
  description,
  link,
  date
) => ({
  title,
  description,
  link,
  date,
});

export const createPostPreviewItemFromSerializable: PostPreviewItemFromSerializable =
  (title, description, link, isoDate) => ({
    title,
    description,
    link,
    date: DateTime.fromISO(isoDate),
  });
