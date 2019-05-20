import React, {FC, ReactNode} from 'react'
import {Box} from '@qiwi/pijma-core'
import {BlockLink, BlockLinkProps} from '../link'
import {Paragraph} from '../typography'

export interface VerticalCardProps extends BlockLinkProps {
  title: string
  description?: string
  icon: ReactNode
  iconSize?: 's' | 'l'
}

const IconSize: { [size in NonNullable<VerticalCardProps['iconSize']>]: number} = {
  s: 16,
  l: 18,
}

export const VerticalCard: FC<VerticalCardProps> = ({title, icon, description, iconSize = 's', ...props}) => (
  <BlockLink {...props}>
    {() => (
      <Box
        p={3}
        minHeight={56}
        minWidth={45}
      >
        <Box
          width={IconSize[iconSize]}
          height={IconSize[iconSize]}
          mt={9}
          mx="auto"
        >
          {typeof icon === 'string' ? <img src={icon} alt={title}/> : icon}
        </Box>
        <Box mt={6} mx="auto" css={{textAlign: 'center'}}>
          <Paragraph
            color="default"
            size="m"
            bold
            children={title}
          />
        </Box>
        {description ? (
          <Box mt={1} mx="auto" css={{textAlign: 'center'}}>
            <Paragraph
              color="support"
              size="s"
              children={description}
            />
          </Box>
        ) : null}
      </Box>
    )}
  </BlockLink>
)
