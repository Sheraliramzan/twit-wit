import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='h-screen bg-black'>
        <div className='container h-ful'>
            {children}
        </div>
    </div>
  )
}
