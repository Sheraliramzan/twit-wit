import React from 'react'

interface FormProps {
    placeholder: string;
    isComment?: boolean;
    postId?: string;
}

 const Form:React.FC<FormProps> = ({
    placeholder,
    isComment = false,
    postId = ''
 }) => {
  return (
    <div></div>
  )
}
export default Form;
