import { ReactNode } from 'react';

interface H1Props {
  children: ReactNode;
}

export function H1(props: H1Props) {
  return (
    <h1
      className='text-3xl text-red-500'
      {...props}
    />
  );
}
