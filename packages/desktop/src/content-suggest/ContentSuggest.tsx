import React, {RefObject, createRef} from 'react'

import {
  SuggestControl,
  Image,
  MenuControl,
  Icon,
  ContentInput,
  Pos,
  Box,
  Card,
  styled,
} from '@qiwi/pijma-core'

import {DropDown} from '../drop-down'
import {MenuItem} from '../menu'

import ContentSuggestProps from './ContentSuggestProps'
import ContentSuggestOptionsModel from './ContentSuggestOptionModel'

const CardPos = Card.withComponent(Pos)
const CardItem = styled(Card)().withComponent(MenuItem)

const dropDownContainerRef: RefObject<HTMLDivElement> = createRef()

export const ContentSuggest = <V extends {}>({
    equals = (a: V, b: V) => a === b,
    ...props
  }: ContentSuggestProps<ContentSuggestOptionsModel<V>, V>) => (
  <SuggestControl<V>
    value={props.value}
    items={props.items}
    equals={equals}
    onRequest={props.onRequest}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onSubmit={props.onSubmit}
    children={(renderProps) => (
      <MenuControl
        count={props.items.length}
        selected={renderProps.selected}
        onItemSelect={renderProps.onChange}
        onKeyDown={renderProps.onKeyDown}
        children={(menuRenderProps) => (
          <CardPos
            type="relative"
            ref={dropDownContainerRef}
            width={1}
            transition={`box-shadow ${renderProps.show ? 300 : 200}ms cubic-bezier(0.4, 0.0, 0.2, 1)`}
            s={renderProps.focused && !renderProps.show ? '0 20px 64px 0 rgba(0, 0, 0, 0.16)' : 'none'}
            r={10}
          >
            <Box
              width={1}
              onMouseEnter={renderProps.onMouseEnter}
              onMouseLeave={renderProps.onMouseLeave}
            >
              <ContentInput
                value={props.suggest}
                tabIndex={props.tabIndex}
                autoComplete={props.autoComplete}
                autoFocus={props.autoFocus}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                ref={renderProps.inputRef}
                pr={14}
                error={!!props.error}
                focused={renderProps.focused}
                norb={renderProps.show}
                hovered={renderProps.hovered}
                onChange={renderProps.onRequest}
                onFocus={renderProps.onFocus}
                onBlur={renderProps.onBlur}
                onKeyDown={menuRenderProps.onKeyDown}
              />
              <Pos
                type="absolute"
                cursor="pointer"
                right={4}
                top={3}
                onMouseDown={renderProps.onSearchMouseDown}
                onClick={renderProps.onSearchClick}
                children={<Icon name="search" color="#666"/>}
              />
            </Box>
            <DropDown
              minWidth={1}
              show={renderProps.show}
              rootClose={false}
              container={dropDownContainerRef.current}
              target={renderProps.inputRef.current!}
              onHide={renderProps.onHide}
            >
              <CardPos
                type="relative"
                height={1}
                minWidth={1}
                r="10px"
                s="0 20px 64px 0 rgba(0, 0, 0, 0.16)"
                pt={12}
                top={-12}
              >
                <CardPos
                  type="relative"
                  width={1}
                  height={1}
                  maxHeight={98}
                  bg="#fff"
                  r="0 0 10px 10px"
                  bt="solid 1px #e6e6e6"
                  ref={menuRenderProps.containerRef}
                  overflow="auto"
                  pt={3}
                >
                  {props.loading ? Array(4).fill(1).map((_item, key) => (
                    <CardItem key={key} icon={true} stub text="stub" notes="stub"/>
                  )) : menuRenderProps.items.map((item, key) => (
                    <CardItem
                      key={key}
                      ref={item.ref}
                      onClick={item.onClick}
                      onMouseDown={item.onMouseDown}
                      onMouseEnter={item.onMouseEnter}
                      cursor="pointer"
                      text={props.items[key].title}
                      notes={props.items[key].description}
                      icon={<Image width={6} height={6} src={props.items[key].logo}/>}
                      hover={item.focused}
                      active={item.selected}
                      focus={item.selected}
                    />
                  ))}
                  {props.result ? (
                    <Box px={4} py={2}>
                      {props.result({
                        focused: menuRenderProps.focused !== undefined ? props.items[menuRenderProps.focused].value : undefined,
                        selected: menuRenderProps.selected !== undefined ? props.items[menuRenderProps.selected].value : undefined,
                        hide: renderProps.onHide,
                      })}
                    </Box>
                  ) : (
                    null
                  )}
                </CardPos>
              </CardPos>
            </DropDown>
          </CardPos>
        )}
      />
    )}
  />
)

ContentSuggest.defaultProps = {
  equals: (a: any, b: any) => a === b,
}
