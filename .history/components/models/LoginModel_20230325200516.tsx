import React, { useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'

export const LoginModel = () => {
    const LoginModel = useLoginModel();

    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    

  return (
    <div></div>
  )
}
