import { Button, ButtonProps } from '@/components/ui/button';
import Link, { LinkProps } from 'next/link';
import React, {
  ComponentType,
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
} from 'react';

interface ContactIconButtonProps
  extends Omit<ButtonProps, 'icon' | 'variant' | 'size' | 'href'>,
    Pick<LinkProps, 'href'> {
  icon: ComponentType<HTMLAttributes<SVGElement>>;
  target?: HTMLAttributeAnchorTarget;
}

export function ContactIconButton({
  icon: IconComponent,
  href,
  target,
  ...restProps
}: ContactIconButtonProps) {
  return (
    <Button
      {...restProps}
      variant='outline'
      size='icon'
      asChild
    >
      <Link
        href={href}
        target={target}
      >
        <IconComponent className='h-5 w-5 stroke-muted-foreground stroke-1' />
      </Link>
    </Button>
  );
}
