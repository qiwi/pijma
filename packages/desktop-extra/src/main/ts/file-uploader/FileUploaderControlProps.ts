import { ReactElement } from 'react'

type TFilesHandler = (files: File[]) => void

export default interface FileUploaderControlProps {
  value: File[]
  onChange?: TFilesHandler
  onUpload?: TFilesHandler
  children: (props: {
    onChange: TFilesHandler
    removeFile: (index: number) => void
  }) => ReactElement<any, any> | null
}
