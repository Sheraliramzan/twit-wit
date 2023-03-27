import React from 'react'

interface ImageUploadProps {
    onChange: (base64: String) => void;
    label: string;
    value? : string;
    disabled?: boolean;
}

const ImageUpload = () => {
  return (
    <div></div>
  )
}

export default ImageUpload;