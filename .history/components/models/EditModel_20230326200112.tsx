import useCurrentUser from "../../hooks/useCurrentUser";
import useUser from "../../hooks/useUser";
import {useEditModel} from "../../hooks/useEditModel";
import {useState} from "react";



const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    const {mutate: mutateFetchedUser} = useUser(currentUser?.id);
    const editModel = useEditModel();

    const [profileImage, setProfileImage] = useState();
    const [coverImage, setCoverImage] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [, setName] = useState();
    return (
        <div></div>
    )
}

export default EditModel;