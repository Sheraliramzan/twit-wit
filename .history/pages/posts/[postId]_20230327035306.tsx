import React from 'react'
import { useRouter } from 'next/router'
import usePost  from '../../hooks/usePost'
import { ClipLoader } from 'react-spinners';
import { Header } from '../../components/Header';
import PostItem from '../../components/posts/PostItem';

 const PostView = () => {
    const router = useRouter();
    const { postId } = router.query;

    const {data: fetchedPost, isLoading} = usePost(postId as string);

    if (isLoading || !fetchedPost) {
        return <div className='flex justify-center items-center h-full'>
                <ClipLoader/>
        </div>
    }
  return (
    <>
        <Header 
        showBackButton
        label='Tweet'
        />
        <PostItem data={fetchedPost}/>
        <Form
    </>
  )
}

export default PostView