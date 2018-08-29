import {styled} from '@qiwi/pijma-core'

export interface OptionFieldInputItemInfoProps {
  disabled?: boolean
}

const OptionFieldInputItemInfo = styled.div<OptionFieldInputItemInfoProps>((props) => ({
  color: props.theme.color.gray.darkest,
  fontSize: 14,
  fontWeight: 300,
  lineHeight: 1.43,
  textAlign: 'left',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}))

export default OptionFieldInputItemInfo
