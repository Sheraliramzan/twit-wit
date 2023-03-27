import useCurrentUser from './useCurrentUser';
import useUser from './useUser';
import {useLoginModel} from './useLoginModel';

const useFollow = (userId: string) => {
    const {data : currentUser, mutate : mutateCurrentUser} = useCurrentUser();
    const {mutate: mutateFetechedUser} = useUser(userId);

    const loginModel = useLoginModel();

    const is
};