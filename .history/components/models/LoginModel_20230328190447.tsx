import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'
import { useRegisterModel } from '../../hooks/useRegisterModel'
import { Input } from '../Input'
import { Model } from '../Model'
import { signIn, useSession, signOut } from 'next-auth/react'

export const LoginModel = () => {
    const loginModel = useLoginModel();
    const registerModel = useRegisterModel();
    const { data: session } = useSession();

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

    const onSubmit = useCallback( async ()=>{
        try{
            setIsLoading(true);

            await signIn('credentials', {
                email,
                password
            })

           loginModel.onClose();
        } catch(error){
            console.log(error);
        } finally{
            setIsLoading(false);
        }
    },[loginModel, email, password])

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
            placeholder='Password'
            type='password'
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
            Don&apos;t Have an Account?
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
        disabled={isLoading}
        onClose={loginModel.onClose}
        isOpen={loginModel.isOpen}
        title='Logout'
        actionLabel='Sign In '
        onSubmit={signIn}
        body={bodyContent}
        footer={footerContent}
        />
    )
}
