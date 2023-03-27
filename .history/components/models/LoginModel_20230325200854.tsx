import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'

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

    const bodyContent =

  return (
    <div></div>
  )
}
