import React from 'react'

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
