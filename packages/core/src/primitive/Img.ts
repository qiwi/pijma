import {styled, CSSObject, StyledOptions} from '../styled'
import {Value, cssValue} from '../primitive/Value'

export interface ImgProps {
  css?: CSSObject
  src?: string
  width?: Value
  minWidth?: Value
  maxWidth?: Value
  height?: Value
  minHeight?: Value
  maxHeight?: Value
  srcSet?: string
  sizes?: string
  alt?: string
}

export const ImgNonProps: PropertyKey[] = [
  'as', 'css', 'display',
  'width', 'minWidth', 'maxWidth',
  'height', 'minHeight', 'maxHeight',
]

export const ImgOptions: StyledOptions<ImgProps> = {
  shouldForwardProp: (prop) => !ImgNonProps.includes(prop),
}

export const Img = styled('img', ImgOptions)<ImgProps>(({theme, ...props}) => ({
  display: 'block',
  width: cssValue(props.width, theme.scale),
  minWidth: cssValue(props.minWidth, theme.scale),
  maxWidth: cssValue(props.maxWidth, theme.scale),
  height: cssValue(props.height, theme.scale),
  minHeight: cssValue(props.minHeight, theme.scale),
  maxHeight: cssValue(props.maxHeight, theme.scale),
  ...props.css,
}))
