import {useCurrentUser} from ""

const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    return (
        <div></div>
    )
}

export default EditModel;