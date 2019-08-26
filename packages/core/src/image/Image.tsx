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
  onReady?: () => void
}

export const Image: FC<ImageProps> = ({
  width,
  height,
  src,
  srcSet,
  sizes,
  alt,
  stub,
  onLoad,
  onReady,
}) => {
  if (!stub) {
    return (
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
  }
  const threshold = [0, 0.8]
  return (
    <ImageControl
      width={width}
      height={height}
      src={src}
      srcSet={srcSet}
      stub={stub}
      onLoad={onLoad}
      onReady={onReady}
      children={(renderProps) => (
        renderProps.ready ? (
          <Img
            key={src}
            width={width}
            height={height}
            src={renderProps.src}
            srcSet={renderProps.srcSet}
            sizes={sizes}
            alt={alt}
          />
        ) : (
          <InView
            threshold={threshold}
            onChange={(inView, {intersectionRatio}) => renderProps.onIntersect(inView, intersectionRatio)}
            children={({ref}) => (
              <Pos ref={ref} type="relative" width={width} height={height}>
                {typeof stub === 'boolean' && stub && !renderProps.loaded ? (
                  <Pos type="absolute" width={width} height={height}>
                    <Stub width={width} height={height} r={width === height ? '100%' : undefined}/>
                  </Pos>
                ) : isValidElement(stub) && Children.only(stub) && !renderProps.loaded ? (
                  <Pos type="absolute" width={width} height={height}>
                    {stub}
                  </Pos>
                ) : (
                  null
                )}
                <Box opacity={typeof stub === 'string' || renderProps.loaded ? 1 : 0}>
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
  )
}
