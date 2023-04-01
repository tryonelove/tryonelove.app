import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Profile } from '../Profile';

interface LayoutProps {
  className?: string;
  name: string;
  company: string;
  position: string;
  children: ReactNode;
}

export function Layout({
  className,
  name,
  company,
  position,
  children,
}: LayoutProps) {
  return (
    <main className={clsx(className, 'flex h-screen flex-col items-center')}>
      <div className='container mx-auto max-w-xl'>
        <div className='flex gap-9'>
          <div className='flex flex-1 flex-col gap-7'>
            <Profile
              name={name}
              company={company}
              position={position}
            />
            <hr />
            <div className='flex flex-col items-center'>{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
