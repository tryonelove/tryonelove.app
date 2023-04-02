import { MdxPostMeta } from '@/posts/PostMeta';
import { DateTime } from 'luxon';

export type PostData = {
  data: MdxPostMeta;
  createdAt: DateTime;
  slug: string;
};

export type PostDataDetailed = PostData & {
  content: string;
};
