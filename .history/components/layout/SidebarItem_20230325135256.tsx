import React from 'react'
import { IconType } from 'react-icons';

interface SidebarItemProps {
    label: string;
    herf?: string;
    icon: IconType;
    onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    
}) => {
  return (
    <div></div>
  )
}
