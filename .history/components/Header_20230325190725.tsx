import React, { useCallback } from 'react'
import {useRouter} from 'next/router'

interface HeaderProps {
    lebal: string;
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

        </div>
    </div>
  )
}
