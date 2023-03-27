import React from 'react'
import {BsHouseFill, BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import {SidebarLogo} from './SidebarLogo'
import {SidebarItem} from './SidebarItem'
import {BiLogOut} from 'react-icons/bi'
import {SidebarTweetButton} from './SidebarTweetButton'
import  useCurrentUser  from '../../hooks/useCurrentUser'
import { signOut } from 'next-auth/react'

export const Sidebar = () => {

  const {data: currentUser} = useCurrentUser();

  const icons = [
    {
      label: 'Home',
      herf: '/',
      icon: BsHouseFill
    },
    {
      label: 'Notifications',
      herf: '/notifications',
      icon: BsBellFill,
      auth: true
    },
    {
      label:'Profile',
      herf: `/users/`,
      icon: FaUser,
      auth: true
    }
  ];
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo/>
          {icons.map((item) => (
            <SidebarItem
              key={item.herf}
              herf={item.herf}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
            />
          ))}
          {
            currentUser && (
              <SidebarItem onClick={()=> signOut()} icon={BiLogOut} label="Logout"/>
            )
          }
          <SidebarTweetButton/>
        </div>
      </div>
    </div>
  )
}
