import React, { useMemo } from 'react'
import useCurrentUser  from '../../hooks/useCurrentUser';
import useUser from '../../hooks/useUser';
import {format} from 'date-fns';

interface UserBioProps {
    userId: string;
}
 const UserBio:React.FC<UserBioProps> = ({
    userId
 }) => {
    const {data: currentUser} = useCurrentUser();
    const {data: fetchedUser} = useUser(userId);

    const createdAt = useMemo(()=>{
        if (!fetchedUser?.createdAt) {
            return null
        };
        return format(new Date(fetchedUser.createdAt), 'MMMM dd, yyyy');
    },[fetchedUser?.createdAt]);

  return (
    <div className='border-b-[1px] border-neutral-800 pb-4'>
        <div className='flex justify-end p-2'>
            {
                
            }
        </div>
    </div>
  )
}

export default UserBio;
