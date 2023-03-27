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
    <input
    disabled = {disabled}
    onChange = {onChange}
    value = {value}
    type = {type}
    placeholder = {placeholder}
    className = 'w-'
    />
  )
}
