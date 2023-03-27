import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const usePosts = (userId?: string) => {
    const url = userId ? `/api/posts?userId=${userId}` : '/api/posts';
    const { data, isLoading, mutate, error } = useSWR, fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default usePosts;