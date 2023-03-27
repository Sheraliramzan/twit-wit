import React, { useCallback } from 'react'
import {useRouter} from 'next/router'

interface HeaderProps {
    lebal: string;
    showBackButton?: boolean;
}

export const Header: React.FC <HeaderProps>= ({lebal;}) => {
    const router = useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[router]) ;
  return (
    <div></div>
  )
}
