import React from 'react'
import {Header} from '../../components/Header'

const Userview = () => {
    const router = useRouter();
    const {userId} = router.query;
  return (
   <>
        <Header showBackButton label='User Profile'/>
   </>
  )
}

export default Userview;