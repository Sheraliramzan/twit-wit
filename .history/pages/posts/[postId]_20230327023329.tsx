import React from 'react'
import { useRouter } from 'next/router'
import usePost  from '../../hooks/usePost'

 const PostView = () => {
    const router = useRouter();
    const { postId } = router.query;

    const {data: fetchedPost, isLoading} = usePost(pos);
  return (
    <div></div>
  )
}

export default PostView
