import React from 'react'

import {
  ModalInputControl,
  Image,
  MenuControl,
  Icon,
  ContentInput,
  Pos,
  Box,
  Card,
  styled,
} from '@qiwi/pijma-core'

import {MenuItem} from '../menu'
import {InputModal} from '../input-modal'

import ContentSearchProps from './ContentSearchProps'
import SearchItemOptionModel from './SearchItemOptionModel'

const CardItem = styled(Card)().withComponent(MenuItem)

export const ContentSearch = <V extends {}>(props: ContentSearchProps<SearchItemOptionModel<V>, V>) => (
  <ModalInputControl
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
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
        <MenuControl<V>
          items={props.items.map(item => item.value)}
          selected={props.selected}
          equals={props.equals}
          onItemSelect={value => {
            props.onItemSelect(value)
            renderProps.onHide()
          }}
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
              onKeyDown={(e) => {
                menuRenderProps.onKeyDown(e)
                if (menuRenderProps.focused === undefined && menuRenderProps.selected === undefined) {
                  renderProps.onKeyDown(e)
                }
              }}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onModalInputBlur}
              onSubmit={renderProps.onSubmit}
              onShow={renderProps.onShow}
              onHide={renderProps.onHide}
              onBack={renderProps.onCancel}
            >
              {menuRenderProps.items.map((item, key) => (
                <CardItem
                  key={key}
                  ref={item.ref}
                  onClick={item.onClick}
                  onMouseEnter={item.onMouseEnter}
                  onMouseLeave={item.onMouseLeave}
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
                    focused: menuRenderProps.focused,
                    selected: menuRenderProps.selected,
                    hide: renderProps.onHide,
                  })}
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
