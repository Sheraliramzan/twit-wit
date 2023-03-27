import {useCurrentUser} from "@clerk/clerk-react";

const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    return (
        <div></div>
    )
}

export default EditModel;