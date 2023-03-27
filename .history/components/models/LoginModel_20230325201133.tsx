import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'
import { Input } from '../Input'

export const LoginModel = () => {
    const loginModel = useLoginModel();

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
            disabled
            /> 
        </div>
    )

  return (
    <div></div>
  )
}
