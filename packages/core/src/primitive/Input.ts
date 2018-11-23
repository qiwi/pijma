import {Interpolation} from 'emotion'

import styled from '../styled'

import {Card, CardProps} from './Card'
import {pxValue} from './Value'

const displayNone: Interpolation = {
  display: 'none',
}

const appearanceNone: Interpolation = {
  appearance: 'none',
}

export interface InputProps extends CardProps {
  size?: number
  weight?: number
  color?: string
  placeholderColor?: string
  transform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  spacing?: number
}

export const Input = styled(Card.withComponent('input'))<InputProps>(({theme, ...props}) => ({
  fontFamily: theme.font.family,
  fontSize: pxValue(props.size, theme.scale),
  fontWeight: props.weight,
  lineHeight: pxValue(props.size, theme.scale),
  color: props.color,
  textTransform: props.transform,
  textIndent: 0,
  letterSpacing: pxValue(props.spacing),
  outline: 'none',
  MozAppearance: 'textfield',
  '&::placeholder': {
    color: props.placeholderColor,
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
}))
