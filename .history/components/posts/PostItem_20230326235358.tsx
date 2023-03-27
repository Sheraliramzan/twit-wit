import Reactfrom 'react'

interface PostItemProps {
    userId?: string;
    data: Record<string, any>;
}
const PostItem:React.FC<PostItemProps> = ({
    userId,
    data
}) => {

    const router = useRouter();
  return (
    <div></div>
  )
}

export default PostItem


