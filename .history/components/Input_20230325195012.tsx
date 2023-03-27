import React from 'react'

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;
}


export const Input: React.FC <InputProps> = ({
    placeholder,
    value,
    onChange,
    type,
    disabled
}) => {
  return (
    <div></div>
  )
}
