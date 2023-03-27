import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const useUser = (userId:) => {
    const { data, isLoading, mutate, error } = useSWR('/api/users', fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default useUser;