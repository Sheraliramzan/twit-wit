import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const useUser = (userId:string) => {
    const { data, isLoading, mutate, error } 
    = useSWR(userid '/api/users', fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default useUser;