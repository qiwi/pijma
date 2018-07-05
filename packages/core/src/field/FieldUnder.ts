import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const FieldUnder: StyledComponent<{}, {}, Theme> = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  minHeight: 16,
  fontSize: 13,
  lineHeight: 16 / 13,
  marginTop: 4,
})

export default FieldUnder
