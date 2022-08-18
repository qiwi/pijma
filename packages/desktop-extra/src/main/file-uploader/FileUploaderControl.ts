import { FC } from 'react'

import FileUploaderControlProps from './FileUploaderControlProps'

const FileUploaderControl: FC<FileUploaderControlProps> = ({
  value,
  children,
  onChange,
  onUpload,
}) => {
  const invokeChange = (files: File[]) => onChange && onChange(files)

  return children({
    onChange: (uploadFiles: File[]) => {
      const nextFiles = value.concat(uploadFiles)
      onUpload && onUpload(uploadFiles)
      invokeChange(nextFiles)
    },
    removeFile: (index: number) => {
      const files = value.slice(0, index).concat(value.slice(index + 1))
      invokeChange(files)
    },
  })
}

export default FileUploaderControl
