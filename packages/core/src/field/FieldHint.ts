import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const FieldHint: StyledComponent<{}, {}, Theme> = styled('div')({
  position: 'absolute',
  zIndex: 1,
  top: 2,
  right: 0,
  width: 24,
  height: 24,
  lineHeight: 0,
})

export default FieldHint
