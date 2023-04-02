import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Profile } from '../Profile';

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

export function Layout({ className, children }: LayoutProps) {
  return (
    <main className={clsx(className, 'flex h-screen flex-col items-center')}>
      <div className='container mx-auto max-w-2xl'>
        <div className='my-9 flex gap-9'>
          <div className='flex flex-1 flex-col gap-7'>
            <Profile
              name={process.env.NEXT_PUBLIC_NAME}
              company={process.env.NEXT_PUBLIC_COMPANY}
              position={process.env.NEXT_PUBLIC_POSITION}
            />
            <hr />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
