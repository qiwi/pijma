import { CSSProperties } from 'react'

import { CSSObject, styled, StyledOptions } from '../styled'

export interface LnkProps {
  css?: CSSObject | CSSProperties
  cursor?: string
}

export const LnkNonProps: PropertyKey[] = ['as', 'css', 'cursor']

export const LnkOptions: StyledOptions<LnkProps> = {
  shouldForwardProp: (prop) => !LnkNonProps.includes(prop),
}

export const Lnk = styled(
  'a',
  LnkOptions,
)<LnkProps>(({ cursor = 'pointer' }) => ({
  cursor,
  textDecoration: 'none',
}))

Lnk.displayName = 'Lnk'
