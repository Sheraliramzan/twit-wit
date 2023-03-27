import React from 'react'
import {Header} from '../../components/Header'
import {useRouter} from 'next/router'

const Userview = () => {
    const router = useRouter();
    const {userId} = router.query;

    const {data: fe}
  return (
   <>
        <Header showBackButton label='User Profile'/>
   </>
  )
}

export default Userview;