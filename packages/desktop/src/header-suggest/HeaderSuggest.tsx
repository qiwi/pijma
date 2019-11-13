import React, {Fragment} from 'react'

import {
  ModalSuggestControl,
  Image,
  MenuControl,
  Box,
  Card,
  styled,
  Spacer,
  Icon,
} from '@qiwi/pijma-core'

import {MenuItem} from '../menu'
import {InputModal} from '../input-modal'
import {Paragraph} from '../typography'
import {Link} from '../link'

import HeaderSuggestProps from './HeaderSuggestProps'
import HeaderSuggestOptionModel from './HeaderSuggestOptionModel'

const CardItem = styled(Card)().withComponent(MenuItem)

export const HeaderSuggest = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  ...props
}: HeaderSuggestProps<HeaderSuggestOptionModel<V>, V>) => (
  <ModalSuggestControl<V>
    value={props.value}
    suggest={props.suggest}
    items={props.items}
    total={props.total}
    equals={equals}
    onRequest={props.onRequest}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onCancel={props.onCancel}
    onHide={props.onCancel}
    onSubmit={props.onSubmit}
    children={(renderProps) => (
      <React.Fragment>
        <Box width={6} height={6} onClick={renderProps.onClick}><Icon name="search"/></Box>
        <MenuControl
          count={props.items ? props.items.length : 0}
          selected={renderProps.selected}
          onSelect={renderProps.onSelect}
          onKeyDown={renderProps.onKeyDown}
          children={(menuRenderProps) => (
            <InputModal
              show={renderProps.show}
              value={props.suggest || ''}
              tabIndex={props.tabIndex}
              placeholder={props.placeholder}
              autoComplete={props.autoComplete}
              inputRef={renderProps.inputRef}
              contentRef={menuRenderProps.containerRef}
              error={props.error}
              loading={props.loading}
              submitIcon="search"
              target={props.target}
              container={props.container}
              onChange={renderProps.onRequest}
              onKeyDown={renderProps.show ? menuRenderProps.onKeyDown : renderProps.onKeyDown}
              onHide={renderProps.onHide}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onModalInputBlur}
              onSubmit={renderProps.onSearchClick}
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
                          cursor="pointer"
                          mt={key === 0 ? 4 : undefined}
                          round
                          text={props.items[key].title}
                          notes={props.items[key].description}
                          icon={<Image width={6} height={6} src={props.items[key].logo}/>}
                          hover={item.focused}
                          active={item.selected}
                          focus={item.selected}
                          onClick={item.onClick}
                          onMouseEnter={item.onMouseEnter}
                        />
                      ))}
                    </Fragment>
                  ) : (
                    null
                  )}
                  {props.total && props.items && props.items.length > 0 ? (
                    <Box px={6} pb={4}>
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
                  ) : (
                    null
                  )}
                </Spacer>
              )}
            </InputModal>
          )}
        />
      </React.Fragment>
    )}
  />
)
