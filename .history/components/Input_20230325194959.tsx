import React from 'react'

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;
}


export const Input: React.FC = () => {
  return (
    <div></div>
  )
}
