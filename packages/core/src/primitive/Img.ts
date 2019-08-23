import styled, {CSSObject} from '../styled'
import {Value, cssValue} from '../primitive/Value'

export interface ImgProps {
  src?: string
  width?: Value
  minWidth?: Value
  maxWidth?: Value
  height?: Value
  minHeight?: Value
  maxHeight?: Value
  css?: CSSObject
  display?: 'block' | 'inline' | 'inline-block'
  cursor?: string
  srcSet?: string
  sizes?: string
  alt?: string
}

export const ImgNonProps = [
  'css', 'innerRef', 'ref', 'display', 'cursor',
  'width', 'minWidth', 'maxWidth',
  'height', 'minHeight', 'maxHeight',
]

export const Img = styled('img', {
  shouldForwardProp: (prop) => !ImgNonProps.includes(prop),
})<ImgProps>(({theme, ...props}) => ({
  display: props.display,
  cursor: props.cursor,
  width: cssValue(props.width, theme.scale),
  minWidth: cssValue(props.minWidth, theme.scale),
  maxWidth: cssValue(props.maxWidth, theme.scale),
  height: cssValue(props.height, theme.scale),
  minHeight: cssValue(props.minHeight, theme.scale),
  maxHeight: cssValue(props.maxHeight, theme.scale),
}), (props) => props.css)
