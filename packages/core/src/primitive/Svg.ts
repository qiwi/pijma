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

export const Svg = styled('svg', {
  shouldForwardProp: (prop) => !['width', 'height', 'animation', 'transition', 'transform', 'transformOrigin'].includes(prop),
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

interface SvgItemProps {
  animation?: string
  transition?: string
  transform?: string
  transformOrigin?: string
}

const SvgItem = (tag: keyof JSX.IntrinsicElements) => (
  styled(tag, {
    shouldForwardProp: (prop) => !['animation', 'transition', 'transform', 'transformOrigin'].includes(prop),
  })<SvgItemProps>(({theme, ...props}) => ({
    animation: props.animation,
    transition: props.transition,
    transform: props.transform,
    transformOrigin: props.transformOrigin,
  }))
)

export const Path = SvgItem('path')

export const Rect = SvgItem('rect')

export const Circle = SvgItem('circle')
