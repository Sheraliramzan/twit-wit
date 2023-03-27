import { useCallback } from "react";
import useUser from "../hooks/useUser";

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

const Avatar:React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const {data: fetchedUser} = useUser(userId);

    const onClick = useCallback(()=>{},[])
    return (
        <div>

        </div>
    )
}

export default Avatar;

