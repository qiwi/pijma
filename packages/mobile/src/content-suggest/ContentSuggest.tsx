import React, {Fragment} from 'react'

import {
  SuggestControl,
  Image,
  MenuControl,
  Icon,
  ContentInput,
  Pos,
  Box,
  Card,
  Spacer,
  styled,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {Link} from '../link'
import {MenuItem} from '../menu'
import {InputModal} from '../input-modal'

import ContentSuggestProps from './ContentSuggestProps'
import ContentSuggestOptionModel from './ContentSuggestOptionModel'

const CardItem = styled(Card)().withComponent(MenuItem)

export const ContentSuggest = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  ...props
}: ContentSuggestProps<ContentSuggestOptionModel<V>, V>) => (
  <SuggestControl<V, ContentSuggestOptionModel<V>>
    value={props.value}
    suggest={props.suggest}
    items={props.items}
    total={props.total}
    empty={props.empty}
    equals={equals}
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
          onMouseEnter={renderProps.onInputMouseEnter}
          onMouseLeave={renderProps.onInputMouseLeave}
        >
          <ContentInput
            value={props.suggest || ''}
            type="search"
            error={false}
            tabIndex={props.tabIndex}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            pr={14}
            focused={false}
            hovered={renderProps.hovered}
            onChange={renderProps.onRequest}
            onFocus={renderProps.onShowFocus}
          />
          <Pos type="absolute" right={4} top={3} onClick={renderProps.onShowClick}>
            <Icon name="search" color="#666"/>
          </Pos>
        </Box>
        <MenuControl
          count={renderProps.items.length}
          selected={renderProps.selected}
          onSelect={renderProps.onItemSelect}
          onKeyDown={renderProps.onModalItemKeyDown}
          children={(menuRenderProps) => (
            <InputModal
              value={props.suggest || ''}
              tabIndex={props.tabIndex}
              autoComplete={props.autoComplete}
              placeholder={props.placeholder}
              maxLength={props.maxLength}
              show={renderProps.show}
              inputRef={renderProps.inputRef}
              contentRef={menuRenderProps.containerRef}
              error={props.error}
              onChange={renderProps.onRequest}
              onKeyDown={renderProps.show ? menuRenderProps.onKeyDown : renderProps.onModalItemKeyDown}
              onBlur={renderProps.onModalInputBlur}
              onSubmit={renderProps.onSearchClick}
              onShow={renderProps.onShowClick}
              onHide={renderProps.onHide}
              onEscape={renderProps.onEscapeInputModal}
              onBack={renderProps.onBack}
            >
              {props.loading ? (
                Array(4).fill(1).map((_item, key) => (
                  <CardItem key={key} icon={true} stub text="stub" notes="stub"/>
                ))
              ) : (
                <Spacer size="s">
                  {menuRenderProps.items.length > 0 ? (
                    <Fragment>
                      {menuRenderProps.items.map((item, key) => (
                        <CardItem
                          key={key}
                          ref={item.ref}
                          onClick={item.onClick}
                          onMouseEnter={item.onMouseEnter}
                          cursor="pointer"
                          text={renderProps.items[key].title}
                          notes={renderProps.items[key].description}
                          icon={<Image width={6} height={6} src={renderProps.items[key].logo}/>}
                          hover={item.focused}
                          active={item.selected}
                          focus={item.selected}
                        />
                      ))}
                    </Fragment>
                  ) : (
                    null
                  )}
                  {props.total && menuRenderProps.items.length > 0 ? (
                    <Box px={4}>
                      <Paragraph>
                        {props.total.text}
                        {props.total.link ? (
                          <Fragment>
                            {' '}
                            <Link
                              onClick={renderProps.onTotalClick}
                              children={props.total.link.text}
                            />
                          </Fragment>
                        ) : (
                          null
                        )}
                      </Paragraph>
                    </Box>
                  ) : props.empty && menuRenderProps.items.length === 0 ? (
                    <Box px={4}>
                      <Paragraph>
                        {props.empty.text}
                        {props.empty.link ? (
                          <Fragment>
                            {' '}
                            <Link
                              onClick={renderProps.onEmptyClick}
                              children={props.empty.link.text}
                            />
                          </Fragment>
                        ) : (
                          null
                        )}
                      </Paragraph>
                    </Box>
                  ) : (
                    null
                  )}
                </Spacer>
              )}
            </InputModal>
          )}
        />
      </Pos>
    )}
  />
)

ContentSuggest.defaultProps = {
  equals: (a: any, b: any) => a === b,
}
