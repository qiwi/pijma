import React, { FC } from 'react'
import DropZone from 'react-dropzone'

import { Box, Icon } from '@qiwi/pijma-core'
import { Text } from '@qiwi/pijma-desktop'

import { Chip } from '../chip'
import FileUploaderControl from './FileUploaderControl'
import FileUploaderProps from './FileUploaderProps'
import UploaderContainer, { ChipsContainer } from './FileUploaderStyles'

const FileUploader: FC<FileUploaderProps> = ({
  value: files,
  multiple,
  text,
  accept = [],
  disabled,
  noDialog,
  maxFiles = 5,
  maxSize,
  minSize,
  ...events
}) => {
  return (
    <FileUploaderControl
      value={files}
      onUpload={events.onUpload}
      onChange={events.onChange}
    >
      {({ onChange, removeFile }) => (
        <Box cursor={disabled ? 'no-drop' : 'inherit'}>
          <DropZone
            // @ts-ignore
            accept={accept}
            multiple={multiple}
            noClick={noDialog}
            maxFiles={maxFiles}
            minSize={minSize}
            maxSize={maxSize}
            onDropAccepted={onChange}
            onDropRejected={events.onDropRejected}
          >
            {({ getRootProps, getInputProps, isDragActive }) => (
              <UploaderContainer
                // @ts-ignore
                active={isDragActive}
                disabled={disabled}
                noDialog={noDialog}
                {...getRootProps()}
              >
                <Box height={32} py={6}>
                  <Box mb={5}>
                    <Icon name="download" />
                  </Box>
                  <Text size="s">
                    {text || (
                      <>
                        Перенесите в эту область доверенность
                        <br />
                        или нажмите для выбора файла
                      </>
                    )}
                  </Text>
                </Box>
                <input {...getInputProps()} />
              </UploaderContainer>
            )}
          </DropZone>
          {files.length > 0 && (
            <ChipsContainer mt={3}>
              {files.map((f, index) => (
                <Box key={index} mr="5px" mb="5px">
                  <Chip text={f.name} onRemove={() => removeFile(index)} />
                </Box>
              ))}
            </ChipsContainer>
          )}
        </Box>
      )}
    </FileUploaderControl>
  )
}

export { FileUploader }
