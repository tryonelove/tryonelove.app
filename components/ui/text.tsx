import clsx from 'clsx';
import React from 'react';

export const Text = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    {...props}
    className={clsx(className, 'text-base')}
    ref={ref}
  />
));

Text.displayName = 'Text';

export const SecondaryText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...restProps }, ref) => (
  <Text
    {...restProps}
    className={clsx('font-mono text-sm text-muted-foreground', className)}
    ref={ref}
  />
));

SecondaryText.displayName = 'SecondaryText';
