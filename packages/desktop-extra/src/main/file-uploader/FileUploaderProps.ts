import { DropzoneOptions } from 'react-dropzone'

export default interface FileUploaderProps {
  value: File[]

  multiple?: boolean
  disabled?: boolean
  noDialog?: boolean
  text?: string
  accept?: DropzoneOptions['accept']
  maxFiles?: DropzoneOptions['maxFiles']
  maxSize?: DropzoneOptions['maxSize']
  minSize?: DropzoneOptions['minSize']

  onUpload?: (files: File[]) => void
  onChange?: (files: File[]) => void
  onDropRejected?: DropzoneOptions['onDropRejected']
}
