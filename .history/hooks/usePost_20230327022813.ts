import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const usePost = (Pos?: string) => {
    const url = userId ? `/api/posts?userId=${userId}` : '/api/posts';
    const { data, isLoading, mutate, error } = useSWR(url, fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default usePost;