import React from 'react'

interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    outline?: boolean;
}

export const Button:React.FC<ButtonProps> = ({
    label, 
    secondary, 
    fullWidth, 
    large, 
    onClick, 
    outline
}) => {
  return (
    <button className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    font-semibold
    hover:opacity-80
    transition
    border-2
    ${outline ? 'border-white' : 'border-transparent'}
    ${fullWidth ? 'w-full' : 'w-fit'}
    ${large ? 'py-3 px-8' : 'py-2 px-6'}
    ${secondary ? 'bg-white' : 'bg-black'}
    `}>
        {label}
    </button>
  )
}
