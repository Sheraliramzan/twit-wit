import React from 'react'
import usePosts from '../../hooks/usePosts';

interface PostFeedProps {
    userId?: string;
}

const PostFeed:React.FC<PostFeedProps>= ({
    userId
}) => {
    const {data: posts} = usePost(userId);
  return (
    <div></div>
  )
}

export default PostFeed;
