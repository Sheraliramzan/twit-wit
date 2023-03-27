import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'
import { useRegisterModel } from '../../hooks/useRegisterModel'
import { Input } from '../Input'
import { Model } from '../Model'
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react'

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

    const onSubmit = useCallback( async ()=>{
        try{
            setIsLoading(true);

            await axios.post("/api/register",{
                email,
                password,
                username,
                name
            });

            toast.success("Account created successfully")
            signIn()

         registerModel.onClose();
        } catch(error){
            console.log(error);
            toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    },[registerModel, email, password, username, name])

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
