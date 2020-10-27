import styled from '../styled'

import {cssValue, Value} from './Value'

interface SvgProps {
  width?: Value
  height?: Value
  animation?: string
  transition?: string
  transform?: string
  transformOrigin?: string
}

export const SvgNonProps = ['width', 'height', 'animation', 'transition', 'transform', 'transformOrigin']

export const Svg = styled('svg', {
  shouldForwardProp: (prop) => !SvgNonProps.includes(prop),
})<SvgProps>(({theme, ...props}) => ({
  width: cssValue(props.width, theme.scale),
  height: cssValue(props.height, theme.scale),
  animation: props.animation,
  transition: props.transition,
  transform: props.transform,
  transformOrigin: props.transformOrigin,
}))

Svg.defaultProps = {
  focusable: 'false',
}

Svg.displayName = 'Svg'

interface SvgItemProps {
  animation?: string
  transition?: string
  transform?: string
  transformOrigin?: string
}

export const SvgItemNonProps = ['animation', 'transition', 'transform', 'transformOrigin']

const SvgItem = (tag: keyof JSX.IntrinsicElements) => (
  styled(tag, {
    shouldForwardProp: (prop) => !SvgItemNonProps.includes(prop),
  })<SvgItemProps>(({theme, ...props}) => ({
    animation: props.animation,
    transition: props.transition,
    transform: props.transform,
    transformOrigin: props.transformOrigin,
  }))
)

export const Path = SvgItem('path')
Path.displayName = 'Path'

export const Rect = SvgItem('rect')
Rect.displayName = 'Rect'

export const Circle = SvgItem('circle')
Circle.displayName = 'Circle'
