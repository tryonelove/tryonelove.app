import { H1 } from '@/components/mdx/Heading';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const components = {
  h1: H1,
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
