import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export const Chip = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...restProps }, ref) => (
  <div
    className={clsx(
      className,
      'flex min-w-4 items-center justify-center rounded-lg bg-primary px-3'
    )}
    ref={ref}
    {...restProps}
  />
));

Chip.displayName = 'Chip';
