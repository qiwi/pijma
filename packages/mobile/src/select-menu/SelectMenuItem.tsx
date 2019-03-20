import {styled} from '@qiwi/pijma-core'

export interface SelectMenuItemProps {
  id: string
  href?: string
  target?: string
  reverse?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export const SelectMenuItem = styled('a')<
  SelectMenuItemProps
>(({theme}) => ({
  cursor: 'pointer',
  fontFamily: theme.font.family,
  fontWeight: theme.font.weight.normal,
  fontSize: '16px',
  textDecoration: 'none',
  color: theme.color.black,
  flexShrink: 0,
  flexGrow: 0,
  whiteSpace: 'nowrap',
  lineHeight: '21px',
  padding: '8px 16px',
  '&:hover, &:active, &:focus': {
    textDecoration: 'none',
    backgroundColor: theme.color.gray.lightest,
  },
}))
