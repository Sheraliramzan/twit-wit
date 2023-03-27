import React from 'react'
import { useRouter } from 'next/router'


 const PostView = () => {
    const router = useRouter();
    const { postId } = router.query;

    const {data: fetchedPost, isLoading} = usePost
  return (
    <div></div>
  )
}

export default PostView
