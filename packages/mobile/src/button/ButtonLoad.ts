import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const ButtonLoad: StyledComponent<{}, {}, Theme> = styled('span')({
  display: 'none',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

export default ButtonLoad
