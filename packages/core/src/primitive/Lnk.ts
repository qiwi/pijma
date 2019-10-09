import styled, {CSSObject} from '../styled'

export interface LnkProps {
  as?: keyof JSX.IntrinsicElements
  css?: CSSObject
  cursor?: string
}

export const LnkNonProps = ['as', 'css', 'cursor']

export const Lnk = styled('a', {
  shouldForwardProp: (prop) => !LnkNonProps.includes(prop),
})<LnkProps>(({
  cursor = 'pointer',
}) => ({
  cursor,
  textDecoration: 'none',
}))
