import React from 'react'
import {BsHouseFill, BsBellFill} from 'react-icons/bs'

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
    <div>Sidebar</div>
  )
}
