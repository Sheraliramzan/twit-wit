import React, { useCallback, useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'

export const LoginModel = () => {
    const LoginModel = useLoginModel();

    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {loading, setLoading} = useState(false);

    const onSubmit = useCallback(()=>{
        try{
            
        } catch(error){
            console.log(error);
        }
    },[])

  return (
    <div></div>
  )
}
