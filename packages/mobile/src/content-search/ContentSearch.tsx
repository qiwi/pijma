import React from 'react'

import {
  ModalSuggestControl,
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
  <ModalSuggestControl<V>
    value={props.value}
    items={props.items.map(item => item.value)}
    equals={props.equals}
    onRequest={props.onRequest}
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
            value={props.suggest}
            type="search"
            error={false}
            tabIndex={props.tabIndex}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            pr={14}
            focused={renderProps.focused}
            hovered={renderProps.hovered}
            onChange={renderProps.onRequest}
            onFocus={renderProps.onFocus}
          />
          <Pos type="absolute" right={4} top={3} onClick={renderProps.onShow}>
            <Icon name="search" color="#666"/>
          </Pos>
        </Box>
        <MenuControl
          count={props.items.length}
          selected={renderProps.selected}
          onItemSelect={renderProps.onChange}
          onKeyDown={renderProps.onKeyDown}
          children={(menuRenderProps) => (
            <InputModal
              value={props.suggest}
              tabIndex={props.tabIndex}
              autoComplete={props.autoComplete}
              placeholder={props.placeholder}
              maxLength={props.maxLength}
              show={renderProps.show}
              inputType="search"
              inputRef={renderProps.modalInputRef}
              contentRef={menuRenderProps.containerRef}
              error={props.error}
              loading={props.loading}
              submitIcon="search"
              onChange={renderProps.onRequest}
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
            </InputModal>
          )}
        />
      </Pos>
    )}
  />
)
