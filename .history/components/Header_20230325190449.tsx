import React, { useCallback } from 'react'
import {useRouter} from 'next/router'

interface HeaderProps {
    lebal: string;
    shpwBackButton?: boolean;
}

export const Header = () => {
    const router = useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[router]) ;
  return (
    <div></div>
  )
}
