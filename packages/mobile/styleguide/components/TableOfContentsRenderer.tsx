import React, {FC, useState} from 'react'

import {Box, Flex, FlexItem, CrossBurger, Icon, IconWrapper} from '@qiwi/pijma-core'
import {Header, HeaderMenu, MenuContainer, TextField} from '@qiwi/pijma-mobile'

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
            children={<CrossBurger active={menuShow}/>}
          />
        </FlexItem>
        <FlexItem width={8} height={8} shrink={0} align="center">
          <IconWrapper color="#ff8c00">
            <Icon name="qiwi"/>
          </IconWrapper>
        </FlexItem>
        <FlexItem
          width={0.25}
          shrink={1}
        />
      </Flex>
      <HeaderMenu
        show={menuShow}
        from="top"
        children={(
          <MenuContainer>
            <Box px={4}>
              <TextField
                value={props.searchTerm}
                placeholder="Поиск"
                hint={<IconWrapper color="#666"><Icon name="search"/></IconWrapper>}
                onChange={props.onSearchTermChange}
              />
            </Box>
            <Box onClick={() => setMenuShow(false)}>
              {props.children}
            </Box>
          </MenuContainer>
        )}
      />
    </Header>
  )
}

export default TableOfContentsRenderer
