import React, {FC, ReactNode, Children, isValidElement} from 'react'

import {Img, Box, Pos, Value} from '../primitive'
import {InView} from '../InView'
import {Stub} from '../stub'
import {ImageControl} from './ImageControl'

export interface ImageProps {
  width: Value
  height: Value
  src: string
  viewDelay?: number
  srcSet?: string
  sizes?: string
  alt?: string
  stub?: string | boolean | ReactNode
  onLoad?: () => void
}

export const Image: FC<ImageProps> = ({
  width,
  height,
  src,
  srcSet,
  sizes,
  alt,
  stub = true,
  viewDelay = 100,
  onLoad,
}) => (
  stub ? (
    <ImageControl
      width={width}
      height={height}
      src={src}
      srcSet={srcSet}
      stub={stub}
      viewDelay={viewDelay}
      onLoad={onLoad}
      children={(renderProps) => (
        renderProps.loaded ? (
          <Img
            key={src}
            width={width}
            height={height}
            maxWidth={1}
            maxHeight={1}
            src={renderProps.src}
            srcSet={renderProps.srcSet}
            sizes={sizes}
            alt={alt}
          />
        ) : (
          <InView
            onChange={renderProps.onChange}
            children={({ref}) => (
              <Pos as="span" ref={ref} type="relative" width={width} height={height}>
                {typeof stub === 'boolean' && stub ? (
                  <Pos as="span" type="absolute" width={width} height={height}>
                    <Stub width={width} height={height} r={width === height ? '100%' : undefined}/>
                  </Pos>
                ) : isValidElement(stub) && Children.only(stub) ? (
                  <Pos as="span" type="absolute" width={width} height={height}>
                    {stub}
                  </Pos>
                ) : (
                  null
                )}
                <Box as="span" opacity={typeof stub === 'string' ? 1 : 0} width={width} height={height}>
                  <Img
                    width={width}
                    height={height}
                    src={renderProps.src}
                    srcSet={renderProps.srcSet}
                    sizes={sizes}
                    alt={alt}
                    css={typeof stub === 'string' ? {filter: 'blur(10px)'} : undefined}
                    onLoad={renderProps.onLoad}
                  />
                </Box>
              </Pos>
            )}
          />
        )
      )}
    />
  ) : (
    <Img
      width={width}
      height={height}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      onLoad={onLoad}
    />
  )
)

Image.defaultProps = {
  stub: true,
}
