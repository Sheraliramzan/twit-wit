import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const useCurrentUser = () => {
    const { data, isLoading, mutate, error } = useSWR('/api/current', fetcher);
    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
        mutate,
    };
}

