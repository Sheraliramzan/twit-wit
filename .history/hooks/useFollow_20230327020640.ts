import useCurrentUser from './useCurrentUser';
import useUser from './useUser';

const useFollow = (userId: string) => {
    const {data : currentUser, mutate : mutateCurrentUser} = useCurrentUser();
    const {mutate: mutateFetechedUser} = useUser(userId);

    const 
};