import React, {FC} from 'react'
import {Flex, FlexItem, Box} from '@qiwi/pijma-core'
import {AngleLeftIcon} from '@qiwi/pijma-media'
import {Heading} from '../typography'

interface MenuHeaderProps {
  title: string
  onClick: () => void
}

export const MenuHeader: FC<MenuHeaderProps> = (props) => (
  <Flex align="center" height={1}>
    <FlexItem shrink={0}>
      <Box width={6} height={6} mx={4} onClick={props.onClick}>
        <AngleLeftIcon/>
      </Box>
    </FlexItem>
    <FlexItem>
      <Heading size="3">{props.title}</Heading>
    </FlexItem>
  </Flex>
)
