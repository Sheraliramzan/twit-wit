import useCurrentUser from "../../hooks/useCurrentUser";
import useUser from "../../hooks/useUser";
import {useEditModel} from "../../hooks/useEditModel";

const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    const {mutate: mutateFetchedUser} = useUser(currentUser?.id);
    const editModel = useEditModel();

    const [profileImage, setProfileImage] = useState(null);
    return (
        <div></div>
    )
}

export default EditModel;