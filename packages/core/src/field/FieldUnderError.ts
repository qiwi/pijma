import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const FieldUnderError: StyledComponent<{}, {}, Theme> = styled('div')((props) => ({
  textAlign: 'left',
  color: props.theme.color.error,
}))

export default FieldUnderError
