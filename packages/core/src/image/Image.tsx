import React, {FC, RefObject, createRef, ReactNode} from 'react'
import {Img, Box, Value} from '../primitive'
import {Stub} from '../stub'
import {ImageControl} from './ImageControl'

interface ImageProps {
  display?: 'block' | 'inline-block'
  width: Value
  height: Value
  src: string
  cursor?: string
  srcSet?: string
  sizes?: string
  alt?: string
  stub?: string | ReactNode
}

export const Image: FC<ImageProps> = ({display, width, height, src, srcSet, sizes, alt, stub}) => {
  const imageRef: RefObject<HTMLImageElement> = createRef()
  return (
    <ImageControl
      width={width}
      height={height}
      display={display}
      src={src}
      stub={stub}
      imageRef={() => imageRef}
      children={(renderProps) => (
        <renderProps.Wrapper>
          <Box width={width} height={height}>
            <Img
              ref={imageRef}
              src={renderProps.src}
              srcSet={srcSet}
              sizes={sizes}
              alt={alt}
              onLoad={renderProps.onImageLoaded}
            />
          </Box>
        </renderProps.Wrapper>
      )}
    />
  )
}

Image.defaultProps = {
  stub: (
    <Stub width={1} height={1}/>
  ),
}
