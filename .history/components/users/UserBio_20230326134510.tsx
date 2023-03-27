import React from 'react'
import { useCurrentUser } from '../../hooks/useCurrentUser';

interface UserBioProps {
    userId: string;
}
 const UserBio:React.FC<UserBioProps> = ({
    userId
 }) => {
    const {data: currentUser} = useCurrentUser(userId);
  return (
    <div></div>
  )
}

export default UserBio;
