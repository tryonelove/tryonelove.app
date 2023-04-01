import { DateTime } from 'luxon';

export const createPostPreviewItemFrom = (
  title: string,
  description: string,
  link: string,
  date: DateTime
) => ({
  title,
  description,
  link,
  date,
});
