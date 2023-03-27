import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const usePosts = ({user}) => {
    const { data, isLoading, mutate, error } = useSWR('/api/users', fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default usePosts;