import React from 'react'

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?:(eb: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;

}


export const Input = () => {
  return (
    <div></div>
  )
}
