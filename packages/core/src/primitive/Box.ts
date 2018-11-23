import {Interpolation} from 'emotion'

import styled from '../styled'

import {Value, cssValue} from './Value'

export type BoxDisplay = 'none' | 'inline' | 'block' | 'contents' | 'flex' | 'grid' | 'inline-block' | 'table'

export interface BoxProps {
  display?: BoxDisplay
  m?: Value
  mt?: Value
  mr?: Value
  mb?: Value
  ml?: Value
  mx?: Value
  my?: Value
  p?: Value
  pt?: Value
  pr?: Value
  pb?: Value
  pl?: Value
  px?: Value
  py?: Value
  width?: Value
  minWidth?: Value
  maxWidth?: Value
  height?: Value
  minHeight?: Value
  maxHeight?: Value
  transition?: 'slow' | 'mean' | 'fast'
  cursor?: string
  css?: Interpolation
}

const shouldForwardProp = (prop: string) => ![
  'display', 'transition', 'css',
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  'width', 'minWidth', 'maxWidth',
  'height', 'minHeight', 'maxHeight',
  'cursor',
].includes(prop)

export const Box = styled('div', {
  shouldForwardProp,
})<BoxProps>(({theme, ...props}) => ({
  display: props.display,
  margin: cssValue(props.m, theme.scale, false),
  marginTop: cssValue(props.mt || props.my, theme.scale, false),
  marginRight: cssValue(props.mr || props.mx, theme.scale, false),
  marginBottom: cssValue(props.mb || props.my, theme.scale, false),
  marginLeft: cssValue(props.ml || props.mx, theme.scale, false),
  padding: cssValue(props.p, theme.scale, false),
  paddingTop: cssValue(props.pt || props.py, theme.scale, false),
  paddingRight: cssValue(props.pr || props.px, theme.scale, false),
  paddingBottom: cssValue(props.pb || props.py, theme.scale, false),
  paddingLeft: cssValue(props.pl || props.px, theme.scale, false),
  width: cssValue(props.width, theme.scale),
  minWidth: cssValue(props.minWidth, theme.scale),
  maxWidth: cssValue(props.maxWidth, theme.scale),
  height: cssValue(props.height, theme.scale),
  minHeight: cssValue(props.minHeight, theme.scale),
  maxHeight: cssValue(props.maxHeight, theme.scale),
  cursor: props.cursor,
  transition: props.transition === undefined ? undefined : theme.transition[props.transition],
}), (props) => props.css)

Box.defaultProps = {
  display: 'block',
}
