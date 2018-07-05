import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const ButtonText: StyledComponent<{}, {}, Theme> = styled('span')(() => ({
  position: 'relative',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

export default ButtonText
