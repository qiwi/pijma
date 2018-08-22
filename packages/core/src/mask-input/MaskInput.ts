import {rgba} from 'polished'
import ReactTextMask, {MaskedInputProps} from 'react-text-mask'

import styled from '../styled'
import StyledComponent from '../StyledComponent'
import Theme from '../Theme'

const MaskInput: StyledComponent<{}, MaskedInputProps, Theme> = styled(ReactTextMask)((props) => ({
  width: '100%',
  height: 28,
  margin: 0,
  padding: 0,
  border: 'none',
  borderRadius: 0,
  borderBottom: `1px solid ${rgba(props.theme.color.black, 0.2)}`,
  fontFamily: 'inherit',
  fontSize: 20,
  fontWeight: 'inherit',
  textIndent: 0,
  lineHeight: 1,
  color: props.theme.color.black,
  outline: 'none',
  backgroundColor: 'transparent',
  transition: 'all 120ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  '-moz-appearance': 'textfield',
  '&::placeholder': {
    color: props.theme.color.gray.darkest,
  },
  '&::-ms-clear': {
    display: 'none',
  },
  '&::-ms-reveal': {
    display: 'none',
  },
  '&::-webkit-search-decoration': {
    display: 'none',
  },
  '&::-webkit-search-cancel-button': {
    display: 'none',
  },
  '&::-webkit-search-results-button': {
    display: 'none',
  },
  '::-webkit-search-results-decoration': {
    display: 'none',
  },
  '&::-webkit-credentials-auto-fill-button': {
    visibility: 'hidden',
    display: 'none', // !important
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
  },
  '&::-webkit-outer-spin-button': {
    appearance: 'none',
  },
  '&::-webkit-inner-spin-button': {
    appearance: 'none',
  },
}))

export default MaskInput
