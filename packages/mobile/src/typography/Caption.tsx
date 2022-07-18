import { Box, Breaker, Stub, Typo, TypoProps } from '@qiwi/pijma-core'
import React, { FunctionComponent } from 'react'

export interface CaptionProps {
  color?: 'default' | 'support' | 'inverse'
  align?: TypoProps['align']
  clamp?: number
  stub?: boolean
}

const CaptionColor: { [color in NonNullable<CaptionProps['color']>]: string } =
  {
    default: '#000',
    support: '#666',
    inverse: '#fff',
  }

export const Caption: FunctionComponent<CaptionProps> = ({
  color = 'support',
  align,
  stub,
  clamp,
  children,
}) =>
  stub ? (
    <Box
      ml={align === 'center' || align === 'right' ? 'auto' : undefined}
      mr={align === 'center' ? 'auto' : undefined}
      width={50}
      maxWidth={1}
    >
      <Stub top={1} bottom={1} width={50} height={3} />
    </Box>
  ) : (
    <Typo
      as="h6"
      display="block"
      size={3.5}
      height={5}
      weight={500}
      color={CaptionColor[color]}
      transform="uppercase"
      spacing={1.5}
      align={align}
      clamp={clamp}
      children={<Breaker children={children} />}
    />
  )

Caption.displayName = 'Caption'

Caption.defaultProps = {
  color: 'support',
}
