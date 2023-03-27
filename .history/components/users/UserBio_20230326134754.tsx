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
        return format(new Date(fetchedUser?.createdAt as string), 'MMM dd, yyyy');
    }

  return (
    <div></div>
  )
}

export default UserBio;
