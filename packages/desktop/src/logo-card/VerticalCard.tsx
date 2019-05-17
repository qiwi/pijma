import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Box} from '@qiwi/pijma-core'
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
      <Flex
        p={3}
        minHeight={56}
        minWidth={45}
        align="center"
        direction="column"
      >
        {contoured ? (
          <FlexItem
            shrink={0}
            width={18}
            height={18}
            mt={8}
            display="flex"
            css={{border: '1px solid #E6E6E6', borderRadius: '50%'}}
          >
            <Box width={8} height={8} m="auto">
              {icon}
            </Box>
          </FlexItem>
        ) : (
          <FlexItem shrink={0} width={16} height={16} mt={9}>
            {icon}
          </FlexItem>
        )}
        <FlexItem mt={6}>
          <Text
            color="default"
            decoration="none"
            size="m"
            bold
            children={title}
          />
        </FlexItem>
        {description ? (
          <FlexItem mt={1}>
            <Text
              color="support"
              decoration="none"
              size="s"
              bold={false}
              children={description}
            />
          </FlexItem>
        ) : null}
      </Flex>
    )}
  </BlockLink>
)
