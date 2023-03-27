import useCurrentUser from "../../hooks/useCurrentUser";
import useUser from "../../hooks/useUser";
import {useEditModel} from "../../hooks/useEditModel";
import {useCallback, useEffect, useState} from "react";
import { toast } from "react-hot-toast";
import axios from "axios";



const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    const {mutate: mutateFetchedUser} = useUser(currentUser?.id);
    const editModel = useEditModel();

    const [profileImage, setProfileImage] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    useEffect (()=>{
        
            setProfileImage(currentUser?.profileImage);
            setCoverImage(currentUser?.coverImage);
            setName(currentUser?.name);
            setUsername(currentUser?.username);
            setBio(currentUser?.bio);
        
    },[currentUser?.name, 
        currentUser?.username, 
        currentUser?.bio, 
        currentUser?.profileImage, 
        currentUser?.coverImage]);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async ()=>{
        try{
            setIsLoading(true);

            await axios.patch('/api/edit', {
                name,
                username,
                bio,
                profileImage,
                coverImage
            });
            mutateFetchedUser();

            toast.success('Profile updated');

            editModel.onClose();
        }catch (error){
            toast.error('Something went wrong');
        }finally{
            setIsLoading(false);
        }
    },[bio, coverImage, editModel, mutateFetchedUser, name, profileImage, username])


    return (
        <div></div>
    )
}

export default EditModel;