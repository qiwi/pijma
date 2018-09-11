import styled from '../styled'

export interface IconWrapperProps {
  color?: string
}

export const IconWrapper = styled.span<IconWrapperProps>(({color}) => ({
  fill: color
}))
