import React from 'react';
import { HTMLAttributes } from 'react';

import clsx from 'clsx';

export const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...restProps }, ref) => (
  <h2
    className={clsx('text-2xl font-bold', className)}
    ref={ref}
    {...restProps}
  />
));

SectionTitle.displayName = 'SectionTitle';

export const Section = React.forwardRef<
  HTMLElement,
  HTMLAttributes<HTMLElement>
>(({ className, ...restProps }, ref) => (
  <section
    className={clsx(className, 'flex flex-col gap-3')}
    ref={ref}
    {...restProps}
  />
));

Section.displayName = 'Section';
