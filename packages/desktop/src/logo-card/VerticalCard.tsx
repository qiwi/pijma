import React, {FC, ReactNode} from 'react'
import {Box} from '@qiwi/pijma-core'
import {BlockLink, BlockLinkProps} from '../link'
import {Text} from '../typography'

export interface VerticalCardProps extends BlockLinkProps {
  title: string
  description?: string
  icon: ReactNode
  contoured?: boolean
}

export const VerticalCard: FC<VerticalCardProps> = ({title, icon, description, contoured, ...props}) => (
  <BlockLink {...props}>
    {() => (
      <Box
        p={3}
        minHeight={56}
        minWidth={45}
      >
        {contoured ? (
          <Box
            width={18}
            height={18}
            mt={8}
            mx="auto"
            display="flex"
            css={{border: '1px solid #E6E6E6', borderRadius: '50%'}}
          >
            <Box width={8} height={8} m="auto">
              {typeof icon === 'string' ? <img src={icon} alt={title}/> : icon}
            </Box>
          </Box>
        ) : (
          <Box width={16} height={16} mt={9} mx="auto">
            {typeof icon === 'string' ? <img src={icon} alt={title}/> : icon}
          </Box>
        )}
        <Box mt={6} mx="auto" css={{textAlign: 'center'}}>
          <Text
            color="default"
            decoration="none"
            size="m"
            bold
            children={title}
          />
        </Box>
        {description ? (
          <Box mt={1} mx="auto" css={{textAlign: 'center'}}>
            <Text
              color="support"
              decoration="none"
              size="s"
              bold={false}
              children={description}
            />
          </Box>
        ) : null}
      </Box>
    )}
  </BlockLink>
)
