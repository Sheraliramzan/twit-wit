import React from 'react'
import {BsHouseFill, BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'

export const Sidebar = () => {

  const icons = [
    {
      label: 'Home',
      herf: '/',
      icon: BsHouseFill
    },
    {
      label: 'Notifications',
      herf: '/notifications',
      icon: BsBellFill
    },
    {
      label:'Profile',
      herf: '/users/123',
      icon: FaUser
    }
  ];
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div cl>

        </div>
      </div>
    </div>
  )
}
