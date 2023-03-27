import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const usePost = (postId?: string) => {
    const url = postId ? `/api/posts?userId=${userId}` : '/api/posts';
    const { data, isLoading, mutate, error } = useSWR(url, fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default usePost;