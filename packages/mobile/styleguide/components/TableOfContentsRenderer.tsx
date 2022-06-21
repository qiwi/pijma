import { Box, CrossBurger, Flex, FlexItem, Icon } from '@qiwi/pijma-core'
import {
  Header,
  HeaderMenu,
  MenuContainer,
  TextField,
} from '@qiwi/pijma-mobile'
import React, { FC, useState } from 'react'

interface TableOfContentsRendererProps {
  searchTerm: string
  onSearchTermChange: (value: string) => void
}

const TableOfContentsRenderer: FC<TableOfContentsRendererProps> = (props) => {
  const [menuShow, setMenuShow] = useState(false)
  return (
    <Header active={menuShow}>
      <Flex height={1} px={4} align="center" justify="space-between">
        <FlexItem width={0.25} shrink={0}>
          <Box
            width={6}
            height={6}
            onClick={() => setMenuShow(!menuShow)}
            children={<CrossBurger active={menuShow} />}
          />
        </FlexItem>
        <FlexItem width={8} height={8} shrink={0} align="center">
          <Icon name="qiwi" color="#ff8c00" size={1} />
        </FlexItem>
        <FlexItem width={0.25} shrink={1} />
      </Flex>
      <HeaderMenu
        show={menuShow}
        from="top"
        children={
          <MenuContainer>
            <Box px={4}>
              <TextField
                value={props.searchTerm}
                placeholder="Поиск"
                hint={<Icon name="search" color="#666" />}
                onChange={props.onSearchTermChange}
              />
            </Box>
            <Box onClick={() => setMenuShow(false)}>{props.children}</Box>
          </MenuContainer>
        }
      />
    </Header>
  )
}

export default TableOfContentsRenderer
