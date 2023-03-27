import React from 'react'

interface ModelProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body: React
}
export const Model = () => {
  return (
    <div></div>
  )
}
