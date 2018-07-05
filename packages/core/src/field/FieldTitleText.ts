import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const FieldTitleText: StyledComponent<{}, {}, Theme> = styled('label')((props) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  color: props.theme.color.gray.darkest,
  maxWidth: '100%',
  fontSize: 20,
  lineHeight: '32px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  transition: 'all 120ms cubic-bezier(0.4, 0.0, 0.2, 1)',
}))

export default FieldTitleText
