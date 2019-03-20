import {styled} from '@qiwi/pijma-core'

export interface HorizontalMenuItemProps {
  active: boolean
  id: string
  href?: string
  target?: string
  reverse?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export const HorizontalMenuItem = styled('a', {
  shouldForwardProp: prop => prop !== 'active',
})<HorizontalMenuItemProps>(({active, theme}) => ({
  cursor: 'pointer',
  fontFamily: theme.font.family,
  fontWeight: theme.font.weight.normal,
  fontSize: '16px',
  textDecoration: 'none',
  color: theme.color.black,
  flexShrink: 0,
  flexGrow: 0,
  whiteSpace: 'nowrap',
  paddingBottom: '4px',
  marginRight: '24px',
  borderBottomWidth: '4px',
  borderBottomStyle: 'solid',
  borderBottomColor: active ? theme.color.brand : 'transparent',
  '&:hover, &:active, &:focus': {
    textDecoration: 'none',
    borderBottomColor: theme.color.brand,
  },
}))
