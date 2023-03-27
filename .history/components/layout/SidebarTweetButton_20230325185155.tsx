import React from 'react'
import {useRouter} from 'next/router'
import {FaFeather} from 'react-icons/fa'

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
            <FaFeather size={24} color='white'/>
        </div>
        <div className='
        mt-6
        hidden
        lg:flex
        px-4
        py-2
        rounded-full
        hover:bg-sky-500
        
        '>

        </div>
    </div>
  )
}
