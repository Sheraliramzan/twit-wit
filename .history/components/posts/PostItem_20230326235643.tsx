import React, { useCallback } from 'react'
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
        event
    },[])
  return (
    <div></div>
  )
}

export default PostItem


