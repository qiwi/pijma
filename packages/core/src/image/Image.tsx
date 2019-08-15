import React, {FC, RefObject, createRef, ReactNode, Children, isValidElement} from 'react'
import {Img, Box, Card, Pos, Value} from '../primitive'
import {Waypoint} from '../waypoint'
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
  stub?: string | boolean | ReactNode
  horizontal?: boolean
  onEnter?: () => void
  onLoad?: () => void
}

export const Image: FC<ImageProps> = ({
  display,
  width,
  height,
  cursor,
  src,
  srcSet,
  sizes,
  alt,
  stub,
  horizontal,
  onEnter,
  onLoad,
}) => {
  const imageRef: RefObject<HTMLImageElement> = createRef()
  if (!stub) {
    return (
      <Box width={width} height={height}>
        <Img
          display={display}
          cursor={cursor}
          ref={imageRef}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          onLoad={onLoad}
        />
      </Box>
    )
  }
  return (
    <ImageControl
      width={width}
      height={height}
      display={display}
      src={src}
      srcSet={srcSet}
      stub={stub}
      imageRef={() => imageRef}
      onEnter={onEnter}
      onLoad={onLoad}
      children={(renderProps) => (
        <Waypoint
          topOffset={-40}
          bottomOffset={-40}
          onEnter={() => renderProps.onEnter()}
          horizontal={horizontal}
        >
          <Box display={display} width={width} height={height} cursor={cursor}>
            {!renderProps.loaded ? (
              <Pos type="absolute" width={width} height={height}>
                {typeof stub === 'boolean' && stub ? (
                  <Stub width={width} height={height} r={width === height ? '100%' : undefined}/>
                ) : isValidElement(stub) && Children.only(stub) ? (
                  stub
                ) : (
                  null
                )}
              </Pos>
            ) : (
              null
            )}
            <Card opacity={typeof stub === 'string' || renderProps.loaded ? 1 : 0}>
              <Img
                display="block"
                width={1}
                height={1}
                ref={imageRef}
                src={renderProps.src}
                srcSet={renderProps.srcSet}
                sizes={sizes}
                alt={alt}
                onLoad={renderProps.onLoad}
              />
            </Card>
          </Box>
        </Waypoint>
      )}
    />
  )
}
