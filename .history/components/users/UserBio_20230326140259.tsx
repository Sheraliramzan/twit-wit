import React, { useMemo } from 'react'
import useCurrentUser  from '../../hooks/useCurrentUser';
import useUser from '../../hooks/useUser';
import {format} from 'date-fns';
import {Button} from '../Button';
import { BiCalendar } from 'react-icons/bi';

interface UserBioProps {
    userId: string;
}
 const UserBio:React.FC<UserBioProps> = ({
    userId
 }) => {
    const {data: currentUser} = useCurrentUser();
    const {data: fetchedUser} = useUser(userId);

    const createdAt = useMemo(()=>{
        if (!fetchedUser?.createdAt) {
            return null
        };
        return format(new Date(fetchedUser.createdAt), 'MMMM dd, yyyy');
    },[fetchedUser?.createdAt]);

  return (
    <div className='border-b-[1px] border-neutral-800 pb-4'>
        <div className='flex justify-end p-2'>
            {
                currentUser?.id === userId ? (
                    <Button secondary label='Edit' onClick={() =>{}}/>
                ):(
                    <Button 
                    onClick={() => {}}
                    label='Follow'
                    secondary
                    />
                )}
        </div>
        <div className='mt-8 px-4'>
                <div className='flex flex-col'>
                    <p className='text-white text-2xl font-semibold'>
                        {fetchedUser?.name}
                    </p>
                    <p className='text-md text-neutral-500'>
                        @{fetchedUser?.username}
                    </p>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='text-white'>
                        {fetchedUser?.bio}
                    </p>
                    <div className='
                    flex
                    flex-row
                    items-center
                    gap-2
                    mt-4
                    text-neutral-500
                    '> 
                        <BiCalendar size={24}/>
                        <p>Joined {createdAt}</p>
                    </div>
                </div>
                <div className='
                flex
                flex-row
                items-center
                
                '>

                </div>
        </div>
    </div>
  )
}

export default UserBio;
