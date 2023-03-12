import Image from 'next/image';
import avatar from 'public/avatar.png';
import { BubbleContainer } from '../Bubble';
import { Socials } from '../Socials';

export function AppMain() {
    return (
        <div className='flex h-screen justify-center overflow-auto bg-slate-900'>
            <BubbleContainer className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-50 blur-sm duration-500 ease-out' />
            <div className='container z-10 mx-auto flex h-full items-center justify-center p-5'>
                <div className='flex flex-col items-center'>
                    <div className='h-20 w-20 sm:h-52 sm:w-52'>
                        <Image
                            className='rounded-full border border-slate-100'
                            src={avatar}
                            alt='Ilya Zdanovich'
                        />
                    </div>
                    <div className='text-center'>
                        <p className='text-sm text-slate-100 sm:text-3xl md:text-4xl'>
                            <span className='font-bold'>Ilya Zdanovich</span>
                        </p>
                        <p className='text-xs font-medium text-slate-500 sm:text-2xl'>Software Engineer</p>
                        <p className='text-xs text-slate-200 sm:text-2xl'>🌎Warsaw, Poland</p>
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    );
}
