import React from 'react'
import {BsHouseFill} from 'react-icons/bs'

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
      icon: BsHouseFill
    }
  ];
  return (
    <div>Sidebar</div>
  )
}
