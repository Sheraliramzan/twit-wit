import React from 'react'
import Image from 'next/image';
import  useUser  from '../../hooks/useUser';
import Avatar from '../Avatar';

interface UserHeroProps {
    userId: string;

}
const UserHero: React.FC<UserHeroProps> = ({

    userId
}) => {
    const {data: fetchedUser} = useUser(userId);
  return (
    <div>
        <div clas>

        </div>
    </div>
  )
}

export default UserHero;

