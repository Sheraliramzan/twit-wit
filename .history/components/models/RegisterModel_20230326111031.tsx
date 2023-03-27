import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'
import { useRegisterModel } from '../../hooks/useRegisterModel'
import { Input } from '../Input'
import { Model } from '../Model'

export const RegisterModel = () => {
    const loginModel = useLoginModel();
    const registerModel = useRegisterModel();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading) {
            return;
        }
        registerModel.onClose();
        loginModel.onOpen();

    },[isLoading, loginModel, registerModel])

    const onSubmit = useCallback(()=>{
        try{
            setIsLoading(true);

            
         registerModel.onClose();
        } catch(error){
            console.log(error);
        } finally{
            setIsLoading(false);
        }
    },[registerModel])

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
            disabled={isLoading}

            /> 
            <Input
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
            value={name}
            disabled={isLoading}

            /> 
            <Input
            placeholder='Username'
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            disabled={isLoading}

            /> 
            <Input
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            disabled={isLoading}
            
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
            Already have an account?
            <span 
            onClick={onToggle}
            className='
            text-white
            cursor-pointer
            hover:underline

            '>
                Sign In
            </span>
        </p>
        </div>
    )
  return (
    <Model
    disabled={isLoading}
    onClose={registerModel.onClose}
    isOpen={registerModel.isOpen}
    title='Create Account'
    actionLabel='Register'
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />
  )

}
