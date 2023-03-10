const REM_TO_PX_RATIO = 16;
const REM_POSTFIX = 'rem';

export const removeRemPostfix = (value: string) => value.replace(REM_POSTFIX, '');

export const addRemPostfix = (value: string | number) => `${value}${REM_POSTFIX}` as const;

export const convertRemToPx = (rem: number) => rem * REM_TO_PX_RATIO;

export const createPxUnits = (value: number) => `${value}px` as const;
