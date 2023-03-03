import { styled } from '@qiwi/pijma-core'

import { TStepVariant } from './interfaces'

export default styled.button<{ variant: TStepVariant }>`
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 50%;
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'active':
        return theme.color.brand
      case 'focus':
        return theme.color.white
      default:
        return theme.color.black
    }
  }};
  border-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'active':
        return theme.color.brand
      case 'focus':
        return 'transparent'
      default:
    }
  }};
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'active':
        return theme.color.white
      case 'focus':
        return theme.color.brand
      default:
        return '#e6e6e6'
    }
  }};
`
