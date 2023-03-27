import React from 'react'
import { IconType } from 'react-icons';

interface SidebarItemProps {
    label: string;
    herf?: string;
    icon: IconType;
    onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    herf,
    icon: Icon,
    onClick
}) => {
  return (
    <div className='flex flex-row items-center'>
        <div className='
        relative 
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center
        p-4
        hover:bg-stale-300
        hover:bg-opacity-10
        cursor-pointer
        lg:hidden
        '>
        <Icon size={28} color="white"/>
        </div>
        <div className='
        relative
        hidden
        lg:flex
        gap-4
        p-4
        rounded-full
        hover:bg-stale-300
        hover:bg-opacity-10
        cursor-pointer
        items-center
        '>
        
        </div>
    </div>
  )
}
