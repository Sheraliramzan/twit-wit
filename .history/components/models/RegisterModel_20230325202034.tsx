import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'
import { Input } from '../Input'
import { Model } from '../Model'

export const RegisterModel = () => {
    const loginModel = useLoginModel();
    const 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = useCallback(()=>{
        try{
            setLoading(true);
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

  return (
    <Model
    disabled={loading}
    onClose={loginModel.onClose}
    isOpen={loginModel.isOpen}
    title='Login'
    actionLabel='Sign In'
    onSubmit={onSubmit}
    body={bodyContent}
    
    />
  )
}
