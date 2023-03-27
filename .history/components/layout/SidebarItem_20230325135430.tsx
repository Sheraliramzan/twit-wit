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
        '>

        </div>
    </div>
  )
}
