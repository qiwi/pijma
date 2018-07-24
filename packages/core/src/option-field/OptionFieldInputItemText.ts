import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

export interface OptionFieldInputItemTextProps {
  disabled?: boolean
}

const OptionFieldInputItemText: StyledComponent<OptionFieldInputItemTextProps, {}, Theme> = styled('div')((props) => ({
  color: props.disabled ? props.theme.color.gray.darkest : props.theme.color.black,
  fontSize: 16,
  fontWeight: 300,
  lineHeight: 1.5,
  textAlign: 'left',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}))

export default OptionFieldInputItemText
