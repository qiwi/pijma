import React, {FC, ReactNode} from 'react'

import {Flex, Box, Pos, MenuControl, TopLevelMenuItem} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {HeaderLink} from './HeaderLink'
import {SimpleModal} from '../modal'
import {Text} from '../typography'

export interface HeaderMenuProps {
  onChange?: (
    href?: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
  ) => void
  items: TopLevelMenuItem[]
  icon: ReactNode
}

export const HeaderMenu: FC<HeaderMenuProps> = props => (
  <MenuControl
    items={props.items}
    children={renderProps => (
      <Flex height={1} direction="column" align="middle" justify="center">
        <Box width={6} height={6} cursor="pointer" onClick={renderProps.onShow}>
          <Icon name="hamburger" />
        </Box>
        <SimpleModal
          show={renderProps.show}
          onShow={renderProps.onShow}
          onHide={renderProps.onHide}
        >
          <Pos mt={-6} mx={-6} mb={6} type="relative" p={4} minHeight={16}>
            <Pos
              type="absolute"
              top={5}
              left={4}
              width={6}
              height={6}
              cursor="pointer"
              onClick={renderProps.active ? renderProps.goBack : renderProps.onHide}
              css={{fill: '#000'}}
              children={<Icon name={renderProps.active ? 'arrow-left' : 'cross'} />}
            />
            {renderProps.active ? (
              <Flex justify="center">
                <Text size="l">{renderProps.active.title}</Text>
              </Flex>
            ) : props.icon ? (
              <Flex justify="center">{props.icon}</Flex>
            ) : null}
          </Pos>
          {renderProps.items.map(({items, ...item}, i) => (
            <HeaderLink
              {...item}
              onClick={items ? renderProps.onItemClick : props.onChange}
              mt={i > 0 ? 8 : 0}
              key={i}
              topLevel={Boolean(items)}
            >
              {item.title}
            </HeaderLink>
          ))}
        </SimpleModal>
      </Flex>
    )}
  />
)
