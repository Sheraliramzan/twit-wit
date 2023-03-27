import {useCurrentUser} from "../../hooks/useCurrentUser";

const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    return (
        <div></div>
    )
}

export default EditModel;