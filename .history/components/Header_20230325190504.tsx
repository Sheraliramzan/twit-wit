import React, { useCallback } from 'react'
import {useRouter} from 'next/router'

interface HeaderProps {
    lebal: string;
    showBackButton?: boolean;
}

export const Header: R = () => {
    const router = useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[router]) ;
  return (
    <div></div>
  )
}
