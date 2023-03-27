import React, { useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface ModelProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}
export const Model: React.FC <ModelProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {
    const handleClose = useCallback(()=>{
        if (disabled){
            return
        }
        onClose();
    },[disabled, onClose]);
    const handleSubmit = useCallback(()=>{
        if (disabled){
            return
        }
        onSubmit();
    },[disabled, onSubmit]);

    if (!isOpen){
        return null;
    }
  return (
    <>
    <div className='
    justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800
    bg-opacity-70
    '>
         <div className='
    relative
    w-full
    lg:w-3/6
    my-6
    mx-auto
    lg-mx-w-3xl
    h-full
    lg:h-auto
    '>
    {/*content*/}
    <div className='
    h-full
    lg:h-auto
    border-0
    rounded-lg
    shadow-lg
    relative
    flex
    flex-col
    w-full
    bg-black
    outline-none
    focus:outline-none
    '>
        {/*header*/}
        <div className='
        flex
        items-center
        justify-between
        p-10
        rounded-t
        '>
            <h3 className='text-xl font-semibold text-white'>{title}</h3>
            <button 
            
            className='
            p-1
            ml-auto
            border-0
            text-white
            hover:opacity-70
            transition
            '>
                <AiOutlineClose 
                size={20}
                />
            </button>
        </div>

    </div>

    </div>
    </div>
    </>
  )
}
