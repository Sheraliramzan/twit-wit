import React from 'react'
import useUsers from '../../hooks/useUsers'

export const FollowBar = () => {

  const {data: users = []} = useUsers
  return (
    <div className='
    px-6
    py-4
    hidden
    lg:block
    '>
        <div className='bg-neutral-800 rounded-xl p-4'>
            <h2 className='text-white text-xl font-semibold'>
                Who to follow
            </h2>
            <div className='flex flex-col gap-6 mt-4'>
                {/** Follow User */}
            </div>
        </div>
    </div>
  )
}
