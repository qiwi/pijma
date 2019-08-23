import React, {FC, ReactNode, Children, isValidElement} from 'react'
import {Img, Card, Pos, Value} from '../primitive'
import {InView} from '../InView'
import {Stub} from '../stub'
import {ImageControl} from './ImageControl'

interface ImageProps {
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
        <InView
          onChange={(inView) => inView ? renderProps.onEnter() : renderProps.onLeave()}
          children={({ref}) => (
            <Pos ref={ref} type="relative" cursor={cursor} width={width} height={height}>
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
                  width={width}
                  height={height}
                  src={renderProps.src}
                  srcSet={renderProps.srcSet}
                  sizes={sizes}
                  alt={alt}
                  onLoad={renderProps.onLoad}
                />
              </Card>
            </Pos>
          )}
        />
      )}
    />
  )
}
