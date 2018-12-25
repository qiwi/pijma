import styled from '../styled'

import {Typo, TypoProps, TypoNonProps} from '../primitive/Typo'

export interface LinkProps extends TypoProps {
}

export const LinkNonProps = TypoNonProps

export const Link = styled(Typo.withComponent('a'), {
  shouldForwardProp: (prop) => !LinkNonProps.includes(prop),
})<LinkProps>(() => ({}))

Link.defaultProps = {
  color: 'inherit',
  decoration: 'none',
  cursor: 'pointer',
}
