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

export const ContentSearch = <P extends {}>(props: ContentSearchProps<SearchItemOptionModel<P>, P>) => (
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
        <MenuControl<SearchItemOptionModel<P>>
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
            </InputModal>
          )}
        />
      </Pos>
    )}
  />
)
