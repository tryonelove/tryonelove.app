import { ReactNode } from 'react';
import { RiGithubFill, RiLinkedinBoxFill, RiTelegramFill } from 'react-icons/ri';
import { AnimatedLink } from '../AnimatedLink';

type LinkName = 'github' | 'linkedin' | 'telegram';

type LinkItem = {
    name: LinkName;
    href: string;
    icon: ReactNode;
};

const LINKS: LinkItem[] = [
    {
        name: 'github',
        href: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL,
        icon: <RiGithubFill />,
    },
    {
        name: 'linkedin',
        href: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL,
        icon: <RiLinkedinBoxFill />,
    },
    {
        name: 'telegram',
        href: process.env.NEXT_PUBLIC_TELEGRAM_PROFILE_URL,
        icon: <RiTelegramFill />,
    },
];

export function Socials() {
    return (
        <div className='mt-2 flex justify-around gap-4'>
            {LINKS.map(({ name, href, icon }) => (
                <AnimatedLink
                    key={name}
                    href={href}
                >
                    {icon}
                </AnimatedLink>
            ))}
        </div>
    );
}
