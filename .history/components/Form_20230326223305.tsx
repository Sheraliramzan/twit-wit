import React from 'react'
import { useLoginModel } from '../hooks/useLoginModel';
import { useRegisterModel } from '../hooks/useRegisterModel';
import  useCurrentUser  from '../hooks/useCurrentUser';

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
    const registerModel = useRegisterModel();
    const loginModel = useLoginModel();

    const {data: currentUser} = useCurrentUser();
    const {mutate: mutateP}
  return (
    <div></div>
  )
}
export default Form;
