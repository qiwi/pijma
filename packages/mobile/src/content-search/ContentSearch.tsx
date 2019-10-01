import React, {FunctionComponent} from 'react'

import {
  ModalInputControl,
  Image,
  MenuControl,
  Card,
  Icon,
  Flex,
  FlexItem,
  ContentInput,
  Spacer,
  Pos,
  Box,
} from '@qiwi/pijma-core'
import {Text} from '../typography'
import {InputModal} from '../input-modal'

import ContentSearchProps from './ContentSearchProps'
import SearchItem from './SearchItem'

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
        <MenuControl<SearchItem>
          items={props.items}
          equals={props.equals}
          onItemSelect={props.onItemSelect}
          onSubmit={renderProps.onSubmit}
          children={(menuRenderProps) => (
            <InputModal
              value={props.value}
              show={renderProps.show}
              inputType="search"
              inputRef={renderProps.modalInputRef}
              contentRef={menuRenderProps.containerRef}
              error={props.error}
              loading={props.loading}
              submitIcon="search"
              onChange={renderProps.onChange}
              onKeyDown={menuRenderProps.onKeyDown}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onModalInputBlur}
              onSubmit={renderProps.onSubmit}
              onShow={renderProps.onShow}
              onHide={renderProps.onHide}
              onBack={renderProps.onCancel}
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
            </InputModal>
          )}
        />
      </Pos>
    )}
  />
)
