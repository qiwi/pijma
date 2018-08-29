import {styled, indent} from '@qiwi/pijma-core'

const OptionFieldHelp = styled.div((props) => ({
  color: props.theme.color.black,
  ...indent(12),
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.43,
  textAlign: 'left',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}))

export default OptionFieldHelp
