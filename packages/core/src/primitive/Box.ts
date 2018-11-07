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
}

const shouldForwardProp = (prop: string) => ![
  'display',
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  'width', 'minWidth', 'maxWidth',
  'height', 'minHeight', 'maxHeight',
  'transition',
].includes(prop)

export const Box = styled('div', {
  shouldForwardProp,
})<BoxProps>(({theme, display, m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py, width, minWidth, maxWidth, height, minHeight, maxHeight, transition}) => ({
  display: display,
  margin: cssValue(m, theme.scale, false),
  marginTop: cssValue(mt || my, theme.scale, false),
  marginRight: cssValue(mr || mx, theme.scale, false),
  marginBottom: cssValue(mb || my, theme.scale, false),
  marginLeft: cssValue(ml || mx, theme.scale, false),
  padding: cssValue(p, theme.scale, false),
  paddingTop: cssValue(pt || py, theme.scale, false),
  paddingRight: cssValue(pr || px, theme.scale, false),
  paddingBottom: cssValue(pb || py, theme.scale, false),
  paddingLeft: cssValue(pl || px, theme.scale, false),
  width: cssValue(width, theme.scale),
  minWidth: cssValue(minWidth, theme.scale),
  maxWidth: cssValue(maxWidth, theme.scale),
  height: cssValue(height, theme.scale),
  minHeight: cssValue(minHeight, theme.scale),
  maxHeight: cssValue(maxHeight, theme.scale),
  transition: transition === undefined ? undefined : theme.transition[transition],
}))

Box.defaultProps = {
  display: 'block',
}
