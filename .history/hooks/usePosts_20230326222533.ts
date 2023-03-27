import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const usePosts = (userId?: string) => {
    const url = ``
    const { data, isLoading, mutate, error } = useSWR('/api/users', fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default usePosts;