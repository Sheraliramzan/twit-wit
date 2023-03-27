import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';



interface ImageUploadProps {
    onChange: (base64: String) => void;
    label: string;
    value? : string;
    disabled?: boolean;

}

const ImageUpload:React.FC<ImageUploadProps> = ({
    onChange,
    label,
    value,
    disabled
}) => {
    const [base64, setBase64] = useState(value);
    const handleChange = useCallback((base64: string)=>{
        onChange(base64);
    },[onChange]);

    const handleDrop = useCallback((files: any)=>{
        const file = files[0];
    },[]);
  return (
    <div></div>
  )
}

export default ImageUpload;