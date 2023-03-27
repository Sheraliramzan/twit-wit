import React from 'react'
import {Header} from '../../components/Header'
import {useRouter} from 'next/router'
import useUser from '../../hooks/useUser';
import { ClipLoader } from 'react-spinners';
import UserHero from '../../components/users/UserHero';
import UserBio from '../../components/users/UserBio';

const Userview = () => {
    const router = useRouter();
    const {userId} = router.query;

    const {data: fetchedUser, isLoading} = useUser(userId as string);

    if(isLoading || !fetchedUser) {
        return(
            <div
            className='
            flex
            justify-center
            items-center
            h-full
            '
            >
                <ClipLoader
                color='blue'
                size={80}
                />
            </div>
        )
    }
  return (
   <>
        <Header showBackButton label={fetchedUser?.name}/>
        <UserHero userId={userId as string}/>
        <UserBio userId = {userId as string}/>
        M
   </>
  )
}

export default Userview;