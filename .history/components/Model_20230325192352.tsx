import React from 'react'

interface ModelProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body: React.ReactElement;
    
}
export const Model = () => {
  return (
    <div></div>
  )
}
