import {styled} from '@qiwi/pijma-core'

const OptionFieldTitleText = styled.label((props) => ({
  color: props.theme.color.black,
  lineHeight: 1.5,
  fontSize: 18,
  fontWeight: 500,
  textAlign: 'left',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}))

export default OptionFieldTitleText
