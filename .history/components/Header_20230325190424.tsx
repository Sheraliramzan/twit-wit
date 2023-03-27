import React, { useCallback } from 'react'
import {useRouter} from 'next/router'

inter

export const Header = () => {
    const router = useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[router]) ;
  return (
    <div></div>
  )
}
