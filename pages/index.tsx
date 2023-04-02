import { AppHead } from '@/components/AppHead';
import {
  createPostPreviewItemFromSerializable,
  createPostPreviewItemSerializable,
} from '@/components/PostPreview';
import { PostPreviewItemSerializable } from '@/components/PostPreview/types';
import { PostsPreview } from '@/components/PostsPreview';
import { getAllPostsData } from '@/utils/posts/mdx';
import { orderBy } from 'lodash-es';

export function getStaticProps() {
  const postsData = getAllPostsData();

  const postsPreviewItems = postsData.map<PostPreviewItemSerializable>((pd) =>
    createPostPreviewItemSerializable(
      pd.data.title,
      pd.data.description,
      pd.slug,
      pd.createdAt
    )
  );

  return {
    props: {
      postsPreviewItems,
    },
  };
}

interface HomeProps {
  postsPreviewItems: PostPreviewItemSerializable[];
}

export default function Home({ postsPreviewItems }: HomeProps) {
  const items = orderBy(
    postsPreviewItems.map((i) =>
      createPostPreviewItemFromSerializable(
        i.title,
        i.description,
        i.link,
        i.isoDate
      )
    ),
    (i) => i.date,
    'desc'
  );

  return (
    <>
      <AppHead />
      <div className='flex flex-col items-center'>
        <PostsPreview postsPreviewItems={items} />
      </div>
    </>
  );
}
