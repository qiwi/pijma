import styled, {CSSObject, StyledOptions} from '../styled'

export interface LnkProps {
  as?: keyof JSX.IntrinsicElements
  css?: CSSObject
  cursor?: string
}

export const LnkNonProps = ['as', 'css', 'cursor']

export const LnkOptions: StyledOptions<Record<string, any>> = {
  shouldForwardProp: (prop) => !LnkNonProps.includes(prop as string),
}

export const Lnk = styled('a', LnkOptions)<LnkProps>(({
  cursor = 'pointer',
}) => ({
  cursor,
  textDecoration: 'none',
}))
