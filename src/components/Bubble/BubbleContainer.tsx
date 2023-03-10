import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Bubble } from './Bubble';
import { PolarCoordinates } from './types';

interface BubbleContainerProps {
    className: string;
}

export function BubbleContainer({ className }: BubbleContainerProps) {
    const [bubbleCenterCoordinates, setBubbleCenterCoordinates] = useState<PolarCoordinates>();

    const handleBubbleCoordinatesChange = (event: MouseEvent) => {
        const { clientX, clientY } = event;

        setBubbleCenterCoordinates({ x: clientX, y: clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleBubbleCoordinatesChange);

        return () => document.removeEventListener('mousemove', handleBubbleCoordinatesChange);
    }, []);

    return (
        <>
            {bubbleCenterCoordinates && (
                <Bubble
                    className={clsx(
                        className,
                        'h-[3000px] w-[3000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-20 blur-sm'
                    )}
                    center={bubbleCenterCoordinates}
                />
            )}
        </>
    );
}
