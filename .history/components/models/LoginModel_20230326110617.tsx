import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'
import { useRegisterModel } from '../../hooks/useRegisterModel'
import { Input } from '../Input'
import { Model } from '../Model'

export const LoginModel = () => {
    const loginModel = useLoginModel();
    const registerModel = useRegisterModel();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading) {
            return;
        }
        loginModel.onClose();
        registerModel.onOpen();

    },[isLoading, loginModel, registerModel])

    const onSubmit = useCallback(()=>{
        try{
            setIsLoading(true);
           loginModel.onClose();
        } catch(error){
            console.log(error);
        } finally{
            setLoading(false);
        }
    },[loginModel])

    const bodyContent = (
        <div className='
        flex
        flex-col
        gap-4
        '>
            <Input
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            disabled={loading}

            /> 
            <Input
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            disabled={loading}
            
            /> 
        </div>
    )
    const footerContent = (
        <div className='
        text-neutral-400
        text-center
        mt-4
        '>
        <p>
            Don't Have an Account?
            <span 
            onClick={onToggle}
            className='
            text-white
            cursor-pointer
            hover:underline

            '>
                Create an account!
            </span>
        </p>
        </div>
    )

  return (
    <Model
    disabled={loading}
    onClose={loginModel.onClose}
    isOpen={loginModel.isOpen}
    title='Login'
    actionLabel='Sign In'
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />
  )
}
