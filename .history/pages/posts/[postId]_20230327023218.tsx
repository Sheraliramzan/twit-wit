import React from 'react'
import { useRouter } from 'next/router'

 const PostView = () => {
    const router = useRouter();
    const { postId } = router.query;

    
  return (
    <div></div>
  )
}

export default PostView
