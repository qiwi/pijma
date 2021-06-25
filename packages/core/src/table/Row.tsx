import styled from '../styled'

import {Card, CardNonProps, CardProps} from '../primitive'

export interface RowProps extends CardProps {
  hover?: boolean
}

export const RowNonProps = CardNonProps.concat([])

export const Row = styled(Card.withComponent('tr'), {
  shouldForwardProp: prop => !RowNonProps.includes(prop),
})<RowProps>(({hover}) => (hover ? {
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
} : {}
))
