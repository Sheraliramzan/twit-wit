import React from 'react'
import {useRouter} from 'next/router'

export const SidebarTweetButton = () => {
    const router = useRouter();
  return (
    <div onClick={()=>router.push('/')}>
        <div className='
        mt-6 
        
        '>

        </div>
    </div>
  )
}
