import React, {RefObject, createRef} from 'react'

import {
  SuggestControl,
  Image,
  MenuControl,
  Icon,
  Spinner,
  ContentInput,
  Pos,
  Box,
  Card,
  styled,
} from '@qiwi/pijma-core'

import {DropDown} from '../drop-down'
import {MenuItem} from '../menu'

import ContentSearchProps from './ContentSearchProps'
import SearchItemOptionModel from './SearchItemOptionModel'

const CardPos = Card.withComponent(Pos)
const CardItem = styled(Card)().withComponent(MenuItem)

const dropDownContainerRef: RefObject<HTMLDivElement> = createRef()

export const ContentSearch = <P extends {}>(props: ContentSearchProps<SearchItemOptionModel<P>, P>) => (
  <SuggestControl<SearchItemOptionModel<P>>
    show={props.show}
    items={props.items}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onShow={props.onShow}
    onHide={props.onHide}
    onSubmit={props.onSubmit}
    children={(renderProps) => (
      <MenuControl<SearchItemOptionModel<P>>
        items={props.items}
        equals={props.equals}
        onItemSelect={props.onItemSelect}
        onSubmit={renderProps.onSubmit}
        children={(menuRenderProps) => (
          <Pos type="relative" ref={dropDownContainerRef} width={1}>
            <Box
              width={1}
              onMouseEnter={renderProps.onMouseEnter}
              onMouseLeave={renderProps.onMouseLeave}
            >
              <ContentInput
                value={props.value}
                ref={renderProps.inputRef}
                type="search"
                pr={14}
                error={false}
                focused={renderProps.focused}
                expanded={renderProps.show}
                hovered={renderProps.hovered}
                onChange={renderProps.onChange}
                onFocus={renderProps.onFocus}
                onBlur={renderProps.onBlur}
                onKeyDown={menuRenderProps.onKeyDown}
              />
              <Pos
                type="absolute"
                cursor="pointer"
                right={4}
                top={3}
                onClick={renderProps.onSubmit}
                children={props.loading ? (
                  <Spinner color="#ff8c00" width={6} height={6}/>
                ) : (
                  <Icon name="search" color="#666"/>
                )}
              />
            </Box>
            <DropDown
              show={renderProps.show}
              rootClose={false}
              container={dropDownContainerRef.current}
              target={renderProps.inputRef.current!}
              onHide={() => renderProps.onHide()}
            >
              <CardPos
                minWidth={1}
                maxHeight={110}
                bg="#fff"
                r="0 0 10px 10px"
                s="0 20px 64px 0 rgba(0, 0, 0, 0.16)"
                bt="solid 1px #e6e6e6"
                ref={menuRenderProps.containerRef}
                overflow="auto"
                height={1}
                type="relative"
                pt={3}
              >
                {menuRenderProps.items.map((item, key) => (
                  <CardItem
                    key={key}
                    ref={item.ref}
                    onClick={item.onClick}
                    onMouseEnter={item.onMouseEnter}
                    onMouseLeave={item.onMouseLeave}
                    cursor="pointer"
                    text={item.title}
                    notes={item.description}
                    icon={<Image width={6} height={6} src={item.logo}/>}
                    hover={item.focused}
                    active={item.selected}
                    focus={item.selected}
                  />
                ))}
                {props.result ? (
                  <Box px={4} py={2}>
                    {props.result}
                  </Box>
                ) : (
                  null
                )}
              </CardPos>
            </DropDown>
          </Pos>
        )}
      />
    )}
  />
)
