import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedLinkProps {
    className?: string;
    children: ReactNode;
    href: string;
}

export function AnimatedLink({ className, children, href }: AnimatedLinkProps) {
    return (
        <Link
            className={clsx(
                className,
                'textl-xl text-slate-400 duration-150 ease-in hover:text-slate-100 hover:duration-150 sm:text-3xl'
            )}
            href={href}
        >
            {children}
        </Link>
    );
}
