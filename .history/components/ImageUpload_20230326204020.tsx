import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';

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
  return (
    <div></div>
  )
}

export default ImageUpload;