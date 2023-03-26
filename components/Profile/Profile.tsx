import Image from 'next/image';
import avatar from '@/public/Ilya.Zdanovich.png';

export function Profile() {
  return (
    <div className='flex items-center justify-center gap-3 pt-9'>
      <Image
        className='h-28 w-28 rounded-full object-contain'
        src={avatar}
        alt='avatar'
      />
      <div className='flex flex-col gap-1'>
        <p className='text-sm font-normal'>
          Software Engineer @ iTechArt Group
        </p>
        <p className='text-2xl font-medium'>Ilya Zdanovich</p>
      </div>
    </div>
  );
}
