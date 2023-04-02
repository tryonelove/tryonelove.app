import { MdxPostMeta } from '@/posts/PostMeta';
import { getAllPostsData, getPostData } from '@/utils/posts/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

type GetPostPageProps = {
  data: MdxPostMeta;
  content: MDXRemoteSerializeResult;
};

type GetPostPageParams = {
  slug: string;
};

type GetPostStaticProps = GetStaticProps<GetPostPageProps, GetPostPageParams>;

type GetPostStaticPaths = GetStaticPaths<GetPostPageParams>;

export const getStaticPaths: GetPostStaticPaths = () => {
  const postsData = getAllPostsData();
  const paths = postsData.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetPostStaticProps = async ({ params }) => {
  const post = params && getPostData(params.slug);
  if (!post) {
    throw new Error('No params found');
  }

  const mdxSource = await serialize(post.content);

  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};

interface PostProps {
  content: MDXRemoteSerializeResult;
}

export default function Post({ content }: PostProps) {
  return (
    <div className='flex flex-col gap-2 px-3'>
      <Link href='/'>Home</Link>
      <div className='prose'>
        <MDXRemote {...content} />
      </div>
    </div>
  );
}
