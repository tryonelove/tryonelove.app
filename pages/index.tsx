import { AppHead } from '@/components/AppHead';
import { Layout } from '@/components/Layout';
import { PostsPreview } from '@/components/PostsPreview';

export function getStaticProps() {
  return {
    props: {
      name: process.env.NAME,
      company: process.env.COMPANY,
      position: process.env.POSITION,
    },
  };
}

interface HomeProps {
  name: string;
  company: string;
  position: string;
}

export default function Home({ name, company, position }: HomeProps) {
  return (
    <>
      <AppHead />
      <Layout
        name={name}
        company={company}
        position={position}
      >
        <PostsPreview />
      </Layout>
    </>
  );
}
