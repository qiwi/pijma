import styled, {CSSObject} from '../styled'

export interface ImgProps {
  src?: string
  css?: CSSObject
  display?: 'block' | 'inline' | 'inline-block'
  cursor?: string
  srcSet?: string
  sizes?: string
  alt?: string
  onLoad?: () => void
}

export const ImgNonProps = [
  'css', 'innerRef', 'ref', 'display',
  'color', 'decoration', 'cursor', 'align',
]

export const Img = styled('img', {
  shouldForwardProp: (prop) => !ImgNonProps.includes(prop),
})<ImgProps>(({theme, ...props}) => ({
  display: props.display,
  cursor: props.cursor,
  width: '100%',
  height: '100%',
}), (props) => props.css)
