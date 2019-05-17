import React, {FC, ReactNode} from 'react'
import {BlockLink, BlockLinkProps} from '../link'
import {Flex, FlexItem} from '@qiwi/pijma-core'
import {Text} from '../typography'

export interface HorizontalCardProps extends BlockLinkProps {
  title: string
  icon: ReactNode
}

export const HorizontalCard: FC<HorizontalCardProps> = ({title, icon, ...props}) => (
  <BlockLink {...props}>
    {() => (
      <Flex px={6} py={4} minHeight={16} minWidth={70} align="center">
        <FlexItem shrink={0} width={8} height={8} mr={3}>
          {icon}
        </FlexItem>
        <Text
          color="default"
          decoration="none"
          size="m"
          children={title}
          bold={false}
        />
      </Flex>
    )}
  </BlockLink>
)
