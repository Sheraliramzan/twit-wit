import useCurrentUser from './useCurrentUser';

const useFollow = (userId: string) => {
    const {data : currentUser, mutate : mutateCurrentUser} = useCurrentUser();
    const {mutate: m}
};