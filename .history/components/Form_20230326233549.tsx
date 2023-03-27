import React, {useCallback, useState} from 'react'
import { useLoginModel } from '../hooks/useLoginModel';
import { useRegisterModel } from '../hooks/useRegisterModel';
import  useCurrentUser  from '../hooks/useCurrentUser';
import usePost  from '../hooks/usePosts';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {Button} from './Button';
import Avatar from './Avatar';


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
            setIsLoading(true);

            await axios.post('/api/posts', {
                body
            });

            toast.success("Tweet created successfully");

            setBody('');
            mutatePost();
        }catch(error){
            toast.error("Something went wrong");
        }finally{
            setIsLoading(false);
        }
    },[body, mutatePost])
  return (
    <div className='border-b-[1px] border-neutral-800 px-5 py-2'>
        {currentUser ? (
            <div className='flex flex-row gap-4'>
                <div>
                    <Avatar userId={currentUser?.id}/>
                </div>
                <div className='w-full '>
                    <textarea 
                    disabled={isLoading}
                    onChange={(event)=>setBody(event.target.value)}
                    value={body}
                    className="
                    disabled:opa
                    "
                    >

                    </textarea>
                </div>
            </div>
        ):(
        <div className='py-8 '>
            <h1 className='text-white text-2xl text-center font-bold mb-4'>Welcome to Twit-Wit</h1>
            <div className='flex flex-row items-center justify-center gap-4'>
                <Button label="Login" onClick={loginModel.onOpen}/>
                <Button label="Register" onClick={registerModel.onOpen} secondary/>
            </div>

        </div>
        )};
    </div>
  )
}
export default Form;
