import React from 'react'
import {useRouter} from 'next/router'
imp

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
        p-4
        items-center
        justify-center
        hover:bg-sky-500
        hover:bg-opacity-80
        transition
        cursor-pointer
        '>
            <FaFeather size={28} color='white'/>
        </div>
    </div>
  )
}
