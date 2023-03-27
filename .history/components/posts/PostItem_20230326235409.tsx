import React from 'react'
import {useRouter} from 'next/router';

interface PostItemProps {
    userId?: string;
    data: Record<string, any>;
}
const PostItem:React.FC<PostItemProps> = ({
    userId,
    data
}) => {

    const router = useRouter();
    const login
  return (
    <div></div>
  )
}

export default PostItem


