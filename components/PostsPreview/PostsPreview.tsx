import { createPathFrom } from '@/utils/posts/path';
import { PostPreview, PostPreviewItem } from '../PostPreview';

interface PostsPreviewProps {
  postsPreviewItems: PostPreviewItem[];
}

export function PostsPreview({ postsPreviewItems }: PostsPreviewProps) {
  return (
    <div className='flex w-full flex-col items-center gap-6 px-3'>
      {postsPreviewItems.map((ppi) => (
        <PostPreview
          key={ppi.date.toISO()}
          createdAt={ppi.date}
          description={ppi.description}
          link={createPathFrom(ppi.link)}
          title={ppi.title}
        />
      ))}
    </div>
  );
}
