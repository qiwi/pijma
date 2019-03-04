import styled from '../styled'

export interface LnkProps {
  textDecoration?: string
  cursor?: string
}

export const LnkNonProps = ['textDecoration', 'cursor']

export const Lnk = styled('a', {
  shouldForwardProp: (prop) => !LnkNonProps.includes(prop),
})<LnkProps>(()=>({
  textDecoration: 'none',
  cursor: 'pointer',
}))
