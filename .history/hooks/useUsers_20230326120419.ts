import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const useUsers = () => {
    const { data, isLoading, mutate, error } = useSWR('/api/current', fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default useUser;