import React from 'react'
import {Header} from '../../components/Header'
import {useRouter} from 'next/router'
import useUser from '../../hooks/useUser';

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
            i
            '
            >

            </div>
        )
    }
  return (
   <>
        <Header showBackButton label='User Profile'/>
   </>
  )
}

export default Userview;