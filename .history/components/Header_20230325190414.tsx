import React, { useCallback } from 'react'
import {useRouter} from 'next/router'

export const Header = () => {
    const router = useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[ro]) ;
  return (
    <div></div>
  )
}
