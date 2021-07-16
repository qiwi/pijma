import styled, {CSSObject, StyledOptions} from '../styled'

import {Card, CardProps, CardNonProps} from './Card'
import {pxValue} from './Value'

const displayNone: CSSObject = {
  display: 'none',
}

const appearanceNone: CSSObject = {
  appearance: 'none',
}

export interface InputProps extends CardProps {
  valueSize?: number
  valueWeight?: number
  valueColor?: string
  valueTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  valueSpacing?: number
  placeholderSize?: number
  placeholderWeight?: number
  placeholderColor?: string
  placeholderTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  placeholderSpacing?: number
}

export const InputNonProps = [
  'valueSize', 'valueWeight', 'valueColor', 'valueTransform', 'valueSpacing',
  'placeholderSize', 'placeholderWeight', 'placeholderColor', 'placeholderTransform', 'placeholderSpacing',
].concat(CardNonProps)

export const InputOptions: StyledOptions = {
  shouldForwardProp: (prop) => !InputNonProps.includes(prop),
}

export const Input = styled(Card, InputOptions)<InputProps>(({theme, ...props}) => ({
  fontFamily: theme.font.family,
  fontSize: pxValue(props.valueSize, theme.scale),
  fontWeight: props.valueWeight,
  lineHeight: pxValue(props.valueSize, theme.scale),
  color: props.valueColor,
  textTransform: props.valueTransform,
  textIndent: 0,
  letterSpacing: pxValue(props.valueSpacing),
  outline: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'textfield',
  '&::placeholder': {
    fontSize: pxValue(props.placeholderSize, theme.scale),
    fontWeight: props.placeholderWeight,
    lineHeight: pxValue(props.placeholderSize, theme.scale),
    color: props.placeholderColor,
    textTransform: props.placeholderTransform,
    letterSpacing: pxValue(props.placeholderSpacing),
  },
  '&::-ms-clear': displayNone,
  '&::-ms-reveal': displayNone,
  '&::-webkit-search-decoration': displayNone,
  '&::-webkit-search-cancel-button': displayNone,
  '&::-webkit-search-results-button': displayNone,
  '&::-webkit-search-results-decoration': displayNone,
  '&::-webkit-credentials-auto-fill-button': {
    visibility: 'hidden',
    display: 'none', // !important
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
  },
  '&::-webkit-outer-spin-button': appearanceNone,
  '&::-webkit-inner-spin-button': appearanceNone,
})).withComponent('input')
