import React from 'react'
import {Header} from '../../components/Header'

const Userview = () => {
    const {userId} = useRouter().query;
  return (
   <>
        <Header showBackButton label='User Profile'/>
   </>
  )
}

export default Userview;