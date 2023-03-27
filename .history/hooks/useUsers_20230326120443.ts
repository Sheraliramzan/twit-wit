import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const useUsers = () => {
    const { data, isLoading, mutate, error } = useSWR('/api/us', fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default useUsers;