import styled, {StyledOptions} from '../styled'

import {Card, CardProps, CardNonProps} from './Card'
import {pxValue} from './Value'

export interface TextAreaProps extends CardProps {
  valueSize?: number
  valueHeight?: number
  valueWeight?: number
  valueColor?: string
  valueTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  valueSpacing?: number
  placeholderSize?: number
  placeholderHeight?: number
  placeholderWeight?: number
  placeholderColor?: string
  placeholderTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  placeholderSpacing?: number,
}

export const TextAreaNonProps = [
  'valueSize',
  'valueWeight',
  'valueColor',
  'valueHeight',
  'valueTransform',
  'valueSpacing',
  'placeholderSize',
  'placeholderHeight',
  'placeholderWeight',
  'placeholderColor',
  'placeholderTransform',
  'placeholderSpacing',
].concat(CardNonProps)

const TextAreaOptions: StyledOptions = {
  shouldForwardProp: (prop) => !TextAreaNonProps.includes(prop as string),
}

export const TextArea = styled(Card, TextAreaOptions)<TextAreaProps>(({theme, ...props}) => ({
  fontFamily: theme.font.family,
  fontSize: pxValue(props.valueSize, theme.scale),
  fontWeight: props.valueWeight,
  lineHeight: pxValue(props.valueHeight, theme.scale),
  color: props.valueColor,
  textTransform: props.valueTransform,
  textIndent: 0,
  letterSpacing: pxValue(props.valueSpacing),
  outline: 'none',
  resize: 'none',
  MozAppearance: 'textfield',
  '&::placeholder': {
    fontSize: pxValue(props.placeholderSize, theme.scale),
    fontWeight: props.placeholderWeight,
    lineHeight: pxValue(props.placeholderHeight, theme.scale),
    color: props.placeholderColor,
    textTransform: props.placeholderTransform,
    letterSpacing: pxValue(props.placeholderSpacing),
  },
})).withComponent('textarea')
