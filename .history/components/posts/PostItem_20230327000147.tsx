import React, { useCallback, useMemo } from 'react'
import {useRouter} from 'next/router';
import {useLoginModel} from '../../hooks/useLoginModel';
import useCurrentUser from '../../hooks/useCurrentUser';

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

        return for
    },[])
  return (
    <div></div>
  )
}

export default PostItem


