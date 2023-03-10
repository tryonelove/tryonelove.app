import Image from 'next/image';
import avatar from 'public/avatar.png';
import { BubbleContainer } from '../Bubble';

export function AppMain() {
    return (
        <main className='h-screen bg-slate-900'>
            <BubbleContainer className='h-[3000px] w-[3000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-20 blur-sm' />
            <div className='container absolute mx-auto flex h-full items-center justify-center p-5'>
                <div className='flex flex-col items-center'>
                    <Image
                        className='rounded-full border border-slate-100'
                        width={200}
                        height={200}
                        src={avatar}
                        alt='Ilya Zdanovich'
                    />
                    <div className='text-center'>
                        <p className='text-4xl font-bold text-slate-100'>Ilya Zdanovich</p>
                        <p className='text-2xl font-medium text-slate-600'>Software Engineer</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
