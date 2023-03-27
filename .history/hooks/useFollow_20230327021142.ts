import useCurrentUser from './useCurrentUser';
import useUser from './useUser';
import {useLoginModel} from './useLoginModel';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

const useFollow = (userId: string) => {
    const {data : currentUser, mutate : mutateCurrentUser} = useCurrentUser();
    const {mutate: mutateFetechedUser} = useUser(userId);

    const loginModel = useLoginModel();

    const isFollowing = useMemo(()=>{
        const list = currentUser?.followingIds || [];

        return list.includes(userId);
    },[userId, currentUser?.followingIds]);

    const toggleFollow = useCallback(()=>{
        if(!currentUser){
            return loginModel.onOpen();
        }

        try{
            let request;

            if (isFollowing){
                request = () 
            }
        }catch(error){
            toast.error("Something went wrong");
        }
    },[])
};