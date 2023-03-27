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
    const {data: featuser} = useUser(userId);
    return (
        <div>

        </div>
    )
}

export default Avatar;

