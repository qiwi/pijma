import { styled, StyledOptions } from '../styled'
import { cssValue, Value } from './Value'

interface SvgProps {
  width?: Value
  height?: Value
  animation?: string
  transition?: string
  transform?: string
  transformOrigin?: string
}

export const SvgNonProps: PropertyKey[] = [
  'as',
  'width',
  'height',
  'animation',
  'transition',
  'transform',
  'transformOrigin',
]

export const SvgOptions: StyledOptions<SvgProps> = {
  shouldForwardProp: (prop) => !SvgNonProps.includes(prop),
}

export const Svg = styled(
  'svg',
  SvgOptions,
)<SvgProps>(({ theme, ...props }) => ({
  width: cssValue(props.width, theme.scale),
  height: cssValue(props.height, theme.scale),
  animation: props.animation,
  transition: props.transition,
  transform: props.transform,
  transformOrigin: props.transformOrigin,
}))

Svg.displayName = 'Svg'

Svg.defaultProps = {
  focusable: 'false',
}

interface SvgItemProps {
  animation?: string
  transition?: string
  transform?: string
  transformOrigin?: string
}

export const SvgItemNonProps: PropertyKey[] = [
  'as',
  'animation',
  'transition',
  'transform',
  'transformOrigin',
]

export const SvgItemOptions: StyledOptions<SvgItemProps> = {
  shouldForwardProp: (prop) => !SvgItemNonProps.includes(prop),
}

const SvgItem = (tag: keyof JSX.IntrinsicElements) =>
  styled(
    tag,
    SvgItemOptions,
  )<SvgItemProps>(({ theme, ...props }) => ({
    animation: props.animation,
    transition: props.transition,
    transform: props.transform,
    transformOrigin: props.transformOrigin,
  }))

export const Path = SvgItem('path')

Path.displayName = 'Path'

export const Rect = SvgItem('rect')

Rect.displayName = 'Rect'

export const Circle = SvgItem('circle')

Circle.displayName = 'Circle'
