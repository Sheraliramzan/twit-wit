import React from 'react'

interface ModelProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    dis
}
export const Model = () => {
  return (
    <div></div>
  )
}
