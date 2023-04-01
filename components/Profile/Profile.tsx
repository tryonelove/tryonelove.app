import Image from 'next/image';
import avatar from '@/public/avatar.jpg';

interface ProfileProps {
  name: string;
  position: string;
  company: string;
}

const defaultCompanyPositionFormatter = (position: string, company: string) =>
  `${position} @ ${company}`;

export function Profile({ name, position, company }: ProfileProps) {
  const companyPosition = defaultCompanyPositionFormatter(position, company);

  return (
    <div className='flex items-center justify-center gap-3 pt-9'>
      <Image
        className='h-28 w-28 rounded-full object-contain'
        src={avatar}
        alt='avatar'
      />
      <div className='flex flex-col gap-1'>
        <p className='text-2xl font-medium'>{name}</p>
        <p className='text-sm font-normal'>{companyPosition}</p>
      </div>
    </div>
  );
}
