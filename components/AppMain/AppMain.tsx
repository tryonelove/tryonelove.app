import { Inter } from 'next/font/google';
import { clsx } from 'clsx';
import { Profile } from '../Profile';

const inter = Inter({ subsets: ['latin'] });

interface AppMainProps {
  name: string;
  company: string;
  position: string;
}

export function AppMain({ name, company, position }: AppMainProps) {
  return (
    <main
      className={clsx(inter.className, 'flex h-screen flex-col items-center')}
    >
      <div className='container mx-auto max-w-2xl'>
        <div className='flex gap-9'>
          <div className='flex flex-1 flex-col gap-7'>
            <Profile
              name={name}
              company={company}
              position={position}
            />
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
}
