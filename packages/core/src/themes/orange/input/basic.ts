import {Interpolation} from 'emotion'

import {ThemeInput} from '@qiwi/pijma-core'

const displayNone: Interpolation = {
  display: 'none',
}

const appearanceNone: Interpolation = {
  appearance: 'none',
}

export const basic: ThemeInput = (props) => ({
  width: '100%',
  height: 28,
  margin: 0,
  padding: 0,
  border: 'none',
  borderRadius: 0,
  borderBottom: props.disabled ? '1px dotted #999' : props.error ? '2px solid #d0021b' : props.focused ? '2px solid #ff8c00' : '1px solid rgba(0, 0, 0, 0.2)',
  fontFamily: 'inherit',
  fontSize: 20,
  fontWeight: 'inherit',
  textIndent: 0,
  lineHeight: 1,
  color: props.disabled ? '#666' : '#000',
  cursor: props.disabled ? 'not-allowed' : 'text',
  outline: 'none',
  backgroundColor: 'transparent',
  transition: 'all 120ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  MozAppearance: 'textfield',
  '&::placeholder': {
    color: '#666',
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
})
