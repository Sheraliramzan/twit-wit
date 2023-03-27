import React from 'react'
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
    const []
  return (
    <div></div>
  )
}

export default ImageUpload;