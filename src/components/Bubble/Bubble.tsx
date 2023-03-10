import clsx from 'clsx';
import { createPxUnits } from '@/helpers/styles/utils';
import { useTailwindConfig } from '@/hooks';
import React, { useEffect, useRef, useState } from 'react';
import { PolarCoordinates } from './types';

interface BubbleProps {
    className?: string;
    center: PolarCoordinates;
}

export function Bubble({ className, center }: BubbleProps) {
    const bubbleRef = useRef<HTMLDivElement>(null);
    const { theme } = useTailwindConfig();

    useEffect(() => {
        if (!bubbleRef.current || !theme) {
            return;
        }

        const { height, width } = bubbleRef.current.getBoundingClientRect();

        const bubbleCenterX = center.x - width / 2;
        const bubbleCenterY = center.y - height / 2;

        bubbleRef.current.style.top = createPxUnits(bubbleCenterY);
        bubbleRef.current.style.left = createPxUnits(bubbleCenterX);
    }, [center, center.x, center.y, theme]);

    return (
        <div className='absolute h-full w-full overflow-hidden'>
            <div
                className={clsx(className, 'absolute rounded-full')}
                ref={bubbleRef}
            />
        </div>
    );
}
