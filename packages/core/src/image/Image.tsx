import React, {FC, ReactNode, Children, isValidElement} from 'react'
import {Img, Box, Pos, Value} from '../primitive'
import {InView} from '../InView'
import {Stub} from '../stub'
import {ImageControl} from './ImageControl'

interface ImageProps {
  width: Value
  height: Value
  src: string
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
  onLoad,
}) => (
  stub ? (
    <ImageControl
      width={width}
      height={height}
      src={src}
      srcSet={srcSet}
      stub={stub}
      onLoad={onLoad}
      children={(renderProps) => (
        renderProps.loaded ? (
          <Img
            key={src}
            width={width}
            height={height}
            maxWidth={1}
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
                <Box as="span" opacity={typeof stub === 'string' ? 1 : 0}>
                  <Img
                    width={width}
                    height={height}
                    src={renderProps.src}
                    srcSet={renderProps.srcSet}
                    sizes={sizes}
                    alt={alt}
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
