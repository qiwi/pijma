import {styled, StyledComponent, Theme, indent} from '@qiwi/pijma-core'

const OptionFieldTitle: StyledComponent<{}, {}, Theme> = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  ...indent(12),
})

export default OptionFieldTitle
