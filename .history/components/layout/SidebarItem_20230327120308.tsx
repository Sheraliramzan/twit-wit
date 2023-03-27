import React, { useCallback } from 'react'
import { IconType } from 'react-icons';
import { useRouter } from 'next/router';
import useCurrentUser  from '../../hooks/useCurrentUser';
import { useLoginModel } from '../../hooks/useLoginModel';
import { BsDot } from 'react-icons/bs'

interface SidebarItemProps {
    label: string;
    herf?: string;
    icon: IconType;
    onClick?: () => void;
    auth?: boolean;
    alert?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    herf,
    icon: Icon,
    onClick,
    auth,
    alert
}) => {
    const loginModel = useLoginModel();
    const {data: currentUser} = useCurrentUser();
    const router = useRouter();
    const handleClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
        if (auth && !currentUser){
            loginModel.onOpen();
        }else if (herf){
        router.push(herf);
        }
    }, [router, onClick, herf, auth, currentUser, loginModel]);
  return (
    <div onClick={handleClick} className='flex flex-row items-center'>
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
        {
            alert ? <BsDot className='text'/> : null
        }
        </div>
        <div className='
        relative
        hidden
        lg:flex
        gap-4
        p-4
        rounded-full
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        items-center
        '>
            <Icon size={28} color="white"/>
            <p className='
                hidden
                lg:block
                text-xl
                text-blue-300
            '>
                {label}
            </p>
        </div>
    </div>
  )
}
