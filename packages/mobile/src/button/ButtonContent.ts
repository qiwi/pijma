import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const ButtonContent: StyledComponent<{}, {}, Theme> = styled('span')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
})

export default ButtonContent
