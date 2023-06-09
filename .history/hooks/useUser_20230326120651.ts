import useSWR from 'swr';
import fetcher  from '../libs/fetcher';

const useUser = (userId:string) => {
    const { data, isLoading, mutate, error } 
    = useSWR(userId ? `/api/users/${userId : , fetcher);
    return {
        data,
        isLoading,
        error,
        mutate,
    };
}

export default useUser;