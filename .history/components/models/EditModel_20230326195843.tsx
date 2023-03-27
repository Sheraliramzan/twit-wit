import useCurrentUser from "../../hooks/useCurrentUser";
import useUser from "../../hooks/useUser";

const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    const {mutate: mutateFetchedUser} = useUser(currentUser?.id);
    const editModel = useEditModel();
    return (
        <div></div>
    )
}

export default EditModel;