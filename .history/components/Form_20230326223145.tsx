import React from 'react'
import { useRegisterModel } from '../hooks/useRegisterModel';

interface FormProps {
    placeholder: string;
    isComment?: boolean;
    postId?: string;
}

 const Form:React.FC<FormProps> = ({
    placeholder,
    isComment,
    postId 
 }) => {
    const registerModel = useRegisterModel
  return (
    <div></div>
  )
}
export default Form;
