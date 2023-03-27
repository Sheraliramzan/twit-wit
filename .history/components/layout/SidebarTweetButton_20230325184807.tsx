import React from 'react'
import {useRouter} from 'next/router'

export const SidebarTweetButton = () => {
    const router = useRouter();
  return (
    <div onClick={()=>router.push('/')}>
        <div className='
        mt-6 
        lg:hidden
        rounded-full
        h-14
        w-14
        flex
        '>

        </div>
    </div>
  )
}
