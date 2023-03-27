import React from 'react'
import {useRouter} from 'next/router';
import {useLoginModel from '../../hooks/useLoginModel';

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
  return (
    <div></div>
  )
}

export default PostItem


