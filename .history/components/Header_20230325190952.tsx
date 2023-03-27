import React, { useCallback } from 'react'
import {useRouter} from 'next/router'
import { BiArrowBack } from 'react-icons/bi';

interface HeaderProps {
    labal: string;
    showBackButton?: boolean;
}

export const Header: React.FC <HeaderProps> = ({lebal, showBackButton}) => {
    const router = useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[router]) ;
  return (
    <div className='border-b-[1px] border-neutral-800 p-5'>
        <div className='flex flex-row items-center gap-2'>
            {
                showBackButton && (
                    <BiArrowBack
                    onClick={handleBack}
                    color='white'
                    size={20}
                    className='
                    cursor-pointer
                    hover:opacity-70
                    transition
                    '
                    />
                )
            }
            <h1 className='text-white text-xl font-semibold'>{lebal}</h1>
        </div>
    </div>
  )
}
