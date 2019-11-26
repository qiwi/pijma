import React, {Fragment} from 'react'

import {
  SuggestControl,
  Image,
  MenuControl,
  Pos,
  Box,
  Card,
  Spacer,
  styled,
  BasicInput,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {Link} from '../link'
import {MenuItem} from '../menu'
import {InputModal} from '../input-modal'

import SuggestFieldProps from './SuggestFieldProps'
import SuggestFieldOptionModel from './SuggestFieldOptionModel'

const CardItem = styled(Card)().withComponent(MenuItem)

export const SuggestField = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  ...props
}: SuggestFieldProps<SuggestFieldOptionModel<V>, V>) => (
  <SuggestControl<V>
    value={props.value}
    suggest={props.suggest}
    items={props.items}
    empty={props.empty}
    equals={equals}
    onRequest={props.onRequest}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onCancel={props.onCancel}
    children={(renderProps) => (
      <Pos type="relative">
        <Box
          width={1}
          onMouseEnter={renderProps.onInputMouseEnter}
          onMouseLeave={renderProps.onInputMouseLeave}
        >
          <BasicInput
            ref={renderProps.inputRef}
            padded
            type={props.typeInput}
            value={props.suggest || ''}
            tabIndex={props.tabIndex}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            error={!!props.error}
            focused={renderProps.focused}
            onChange={renderProps.onRequest}
            onFocus={renderProps.onShowFocus}
            onBlur={renderProps.onInputBlur}
          />
        </Box>
        <MenuControl
          count={props.items ? props.items.length : 0}
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
                          text={props.items[key].title}
                          notes={props.items[key].description}
                          icon={<Image width={6} height={6} src={props.items[key].logo}/>}
                          hover={item.focused}
                          active={item.selected}
                          focus={item.selected}
                        />
                      ))}
                    </Fragment>
                  ) : (
                    null
                  )}
                  {props.empty && props.items && props.items.length === 0 ? (
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

SuggestField.defaultProps = {
  equals: (a: any, b: any) => a === b,
}
