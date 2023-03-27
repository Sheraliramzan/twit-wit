import React from 'react'

interface PostItemProps {
    userId?: string;
    data: Record<string, any>;
}
const PostItem:React.FC<PostItemProps> = ({
    userId,
    data
}) => {
  return (
    <div></div>
  )
}

export default PostItem


