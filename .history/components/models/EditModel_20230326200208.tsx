import useCurrentUser from "../../hooks/useCurrentUser";
import useUser from "../../hooks/useUser";
import {useEditModel} from "../../hooks/useEditModel";
import {useEffect, useState} from "react";



const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    const {mutate: mutateFetchedUser} = useUser(currentUser?.id);
    const editModel = useEditModel();

    const [profileImage, setProfileImage] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    useEffect 
    return (
        <div></div>
    )
}

export default EditModel;