import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const FieldUnderAction: StyledComponent<{}, {}, Theme> = styled('div')(({theme}) => ({
  whiteSpace: 'nowrap',
  paddingLeft: 20,
  marginLeft: 'auto',
  textAlign: 'right',
}))

export default FieldUnderAction
