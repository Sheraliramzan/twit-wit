import React from 'react'
import usePosts from '../../hooks/usePosts';
import PostItem from './PostItem';

interface PostFeedProps {
    userId?: string;
}

const PostFeed:React.FC<PostFeedProps>= ({
    userId
}) => {
    const {data: posts = } = usePosts(userId);

  return (
    <>
        {
            posts && posts.map((post: Record<string, any>)=>(
                <PostItem
                userId={userId || post.user?.id}
                key={post.id}
                data={post}
                />
        ))}
    </>
  )
}

export default PostFeed;
