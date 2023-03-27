import React, { useState } from 'react'
import { useLoginModel } from '../../hooks/useLoginModel'
imp

export const LoginModel = () => {
    const LoginModel = useLoginModel();

    const {email, setEmail} = useState('');

  return (
    <div></div>
  )
}
