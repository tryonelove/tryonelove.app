import { DateTime } from 'luxon';

interface PostPreviewProps {
  title: string;
  link: string;
  description: string;
  createdAt: DateTime;
}

export function PostPreview({
  title,
  link,
  description,
  createdAt,
}: PostPreviewProps) {
  return (
    <div className='flex w-full max-w-lg flex-col gap-4 rounded-lg border p-5'>
      <a
        className='truncate text-center text-xl font-bold'
        href={link}
      >
        {title}
      </a>
      <p className='line-clamp-6'>{description}</p>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-neutral-400'>
          {createdAt.toLocaleString(DateTime.DATE_SHORT)}
        </p>
        <a
          className='rounded py-1 px-3 font-semibold'
          href={link}
        >
          Read more
        </a>
      </div>
    </div>
  );
}
