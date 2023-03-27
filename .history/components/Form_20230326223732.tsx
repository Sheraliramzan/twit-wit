import React, {useCallback, useState} from 'react'
import { useLoginModel } from '../hooks/useLoginModel';
import { useRegisterModel } from '../hooks/useRegisterModel';
import  useCurrentUser  from '../hooks/useCurrentUser';
import usePost  from '../hooks/usePosts';
import { toast } from 'react-hot-toast';


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
    const {mutate: mutatePost} = usePost();

    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback( async ()=>{
        try{

        }catch(error){
            toast.error("Something went wrong");
        }fin
    },[])
  return (
    <div></div>
  )
}
export default Form;
