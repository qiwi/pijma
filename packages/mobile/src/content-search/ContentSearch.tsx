import React, {FunctionComponent} from 'react'

import {
  ModalInputControl,
  Image,
  MenuControl,
  Card,
  Input,
  Icon,
  Flex,
  FlexItem,
  Spinner,
  ContentInput,
  Spacer,
  Pos,
  Box,
} from '@qiwi/pijma-core'
import {SimpleModal} from '../modal'
import {Text} from '../typography'

import ContentSearchProps from './ContentSearchProps'
import SearchItem from './SearchItem'

const CardPos = Card.withComponent(Pos)
const CardFlex = Card.withComponent(Flex)
const BoxPos = Box.withComponent(Pos)

export const ContentSearch: FunctionComponent<ContentSearchProps> = (props) => (
  <ModalInputControl
    show={props.show}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onShow={props.onShow}
    onHide={props.onHide}
    onCancel={props.onCancel}
    onSubmit={props.onSubmit}
    children={(renderProps) => (
      <Pos type="relative">
        <Box
          width={1}
          onMouseEnter={renderProps.onMouseEnter}
          onMouseLeave={renderProps.onMouseLeave}
        >
          <ContentInput
            value={props.value}
            type="search"
            pr={14}
            error={false}
            focused={renderProps.focused}
            hovered={renderProps.hovered}
            onChange={renderProps.onChange}
            onFocus={renderProps.onFocus}
          />
          <Pos type="absolute" right={4} top={3} onClick={renderProps.onShow}>
            <Icon name="search" color="#666"/>
          </Pos>
        </Box>
        <SimpleModal
          zIndex={10003}
          show={renderProps.show}
          onHide={renderProps.onHide}
          restoreFocus={false}
          p={0}
        >
          <MenuControl<SearchItem>
            items={props.items}
            onItemSelect={props.onItemSelect}
            onSubmit={renderProps.onSubmit}
            children={(menuRenderProps) => (
              <Card
                width={1}
                height={1}
                bg="#fff"
              >
                <CardPos
                  type="relative"
                  transition="all"
                  s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
                >
                  <CardFlex
                    height={15}
                    align="center"
                    p={4}
                    transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                    bb={props.error ? 'solid 2px #d0021b' : 'solid 2px transparent'}
                  >
                    <FlexItem shrink={0} mr={4} onClick={renderProps.onCancel}>
                      <Icon name="arrow-left"/>
                    </FlexItem>
                    <FlexItem grow={1}>
                      <Input
                        value={props.value}
                        ref={renderProps.modalInputRef}
                        type="search"
                        width={1}
                        autoFocus={true}
                        onBlur={renderProps.onModalInputBlur}
                        onKeyDown={menuRenderProps.onKeyDown}
                        onChange={renderProps.onChange}
                      />
                    </FlexItem>
                    <FlexItem shrink={0} ml={4} onClick={renderProps.onSubmit}>
                      {props.loading ? (
                        <Spinner color="#ff8c00" width={6} height={6}/>
                      ) : (
                        <Icon name="search" color="#666"/>
                      )}
                    </FlexItem>
                  </CardFlex>
                </CardPos>
                <BoxPos
                  ref={menuRenderProps.containerRef}
                  overflow="auto"
                  type="relative"
                  pt={3}
                  height="calc(100% - 60px)"
                >
                  {menuRenderProps.items.map((item, key) => (
                    <Card
                      key={key}
                      ref={item.ref}
                      px={4}
                      py={2}
                      bg={item.selected ? '#E6E6E6' : item.focused ? '#F5F5F5' : '#FFF'}
                      onClick={item.onClick}
                      onMouseEnter={item.onMouseEnter}
                      onMouseLeave={item.onMouseLeave}
                    >
                      <Flex>
                        <FlexItem shrink={0} mr={3}>
                          <Image width={6} height={6} src={item.logo}/>
                        </FlexItem>
                        <FlexItem grow={1}>
                          <Spacer size="xxs">
                            <Text bold>{item.title}</Text>
                            <Text color="support">{item.description}</Text>
                          </Spacer>
                        </FlexItem>
                      </Flex>
                    </Card>
                  ))}
                  {props.result ? (
                    <Box px={4} py={2}>
                      {props.result}
                    </Box>
                  ) : (
                    null
                  )}
                </BoxPos>
              </Card>
            )}
          />
        </SimpleModal>
      </Pos>
    )}
  />
)
