import React, {FC, ReactNode, Children, isValidElement} from 'react'
import {Img, Box, Card, Pos, Value} from '../primitive'
import {InView} from '../inView'
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
  onEnter,
  onLoad,
}) => {
  if (!stub) {
    return (
      <Img
        display={display}
        width={width}
        height={height}
        cursor={cursor}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        onLoad={onLoad}
      />
    )
  }
  return (
    <ImageControl
      width={width}
      height={height}
      src={src}
      srcSet={srcSet}
      stub={stub}
      onEnter={onEnter}
      onLoad={onLoad}
      children={(renderProps) => (
        <InView onChange={(inView) => inView ? renderProps.onEnter() : renderProps.onLeave()}>
          <Box display={display} cursor={cursor} width={width} height={height}>
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
                width={width}
                height={height}
                src={renderProps.src}
                srcSet={renderProps.srcSet}
                sizes={sizes}
                alt={alt}
                onLoad={renderProps.onLoad}
              />
            </Card>
          </Box>
        </InView>
      )}
    />
  )
}
