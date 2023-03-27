import useCurrentUser from "../../hooks/useCurrentUser";

const EditModel = () =>{

    const {data: currentUser} = useCurrentUser();
    const {mutate: mutateDe} = useUpdateUser(currentUser?.id);
    return (
        <div></div>
    )
}

export default EditModel;