import React, { useCallback, useMemo } from 'react'
import {useRouter} from 'next/router';
import {useLoginModel} from '../../hooks/useLoginModel';
import useCurrentUser from '../../hooks/useCurrentUser';
import {  formatDistanceToNowStrict } from 'date-fns';
import Avatar from '../Avatar';

interface PostItemProps {
    userId?: string;
    data: Record<string, any>;
}
const PostItem:React.FC<PostItemProps> = ({
    userId,
    data
}) => {

    const router = useRouter();
    const loginModel = useLoginModel();

    const {data: currentUser} = useCurrentUser();

    const goToUser = useCallback((event: any)=>{
        event.stopPropagation();

        router.push(`/users/${data.user.id}`);
    },[router, data.user.id]);

    const goToPost = useCallback(()=>{
        router.push(`/posts/${data.id}`);
    },[router, data.id]);

    const onLike = useCallback((event: any)=>{
        event.stopPropagation();

        loginModel.onOpen();
    },[loginModel]);

    const createdAt = useMemo(()=>{
        if(!data?.createdAt){ 
            return null
        };

        return formatDistanceToNowStrict(new Date(data.createdAt));
    },[data?.createdAt]);
  return (
    <div
    onClick={goToPost}
    className="
    border-b-[1px]
    border-neutral-800
    p-5
    cursor-pointer
    hover:bg-neutral-900
    transition
    "
    >
        <div className='flex flex-row items-start gap-3'>
            <Avatar userId={data.user.id}/>
            <div>
                <div className='flex flex-row items-center gap-2'>
                    <p className='text-white font-semibold cursor-pointer hover:underline'>{data.user.name}</p>
                    
                </div>
            </div>
        </div>  

    </div>
  )
}

export default PostItem


