import React, {RefObject, createRef, Fragment} from 'react'

import {
  SuggestControl,
  Image,
  MenuControl,
  Pos,
  Box,
  Card,
  styled,
  Spacer,
  BasicInput,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {Link} from '../link'
import {DropDown} from '../drop-down'
import {MenuItem} from '../menu'

import SuggestFieldProps from './SuggestFieldProps'
import SuggestFieldOptionsModel from './SuggestFieldOptionModel'

const CardPos = Card.withComponent(Pos)
const CardItem = styled(Card)().withComponent(MenuItem)

const dropDownContainerRef: RefObject<HTMLDivElement> = createRef()

export const SuggestField = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  ...props
}: SuggestFieldProps<SuggestFieldOptionsModel<V>, V>) => (
  <SuggestControl<V>
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
    onHide={props.onHide}
    children={(renderProps) => (
      <MenuControl
        count={props.items ? props.items.length : 0}
        selected={renderProps.selected}
        onSelect={renderProps.onItemSelect}
        onKeyDown={renderProps.onItemKeyDown}
        children={(menuRenderProps) => (
          <Pos
            type="relative"
            ref={dropDownContainerRef}
            transition={`box-shadow ${renderProps.result ? 300 : 200}ms cubic-bezier(0.4, 0.0, 0.2, 1)`}
          >
            <Box
              width={1}
              px={6}
              onMouseEnter={renderProps.onInputMouseEnter}
              onMouseLeave={renderProps.onInputMouseLeave}
            >
              <BasicInput
                ref={renderProps.inputRef}
                padded
                type="text"
                value={props.suggest || ''}
                tabIndex={props.tabIndex}
                autoComplete={props.autoComplete}
                autoFocus={props.autoFocus}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                error={!!props.error}
                focused={renderProps.focused}
                onChange={renderProps.onRequest}
                onFocus={renderProps.onInputFocus}
                onBlur={renderProps.onInputBlur}
                onKeyDown={renderProps.result ? menuRenderProps.onKeyDown : renderProps.onItemKeyDown}
              />
            </Box>
            <DropDown
              target={renderProps.inputRef.current!}
              container={dropDownContainerRef.current}
              minWidth={1}
              width={1}
              offset={3}
              show={renderProps.result}
              rootClose={false}
              onHide={renderProps.onHide}
            >
              <CardPos
                ref={menuRenderProps.containerRef}
                maxHeight={98}
                bg="#fff"
                py={3}
                s="0 28px 52px 0 rgba(0, 0, 0, 0.16)"
                r={10}
                overflow="auto"
                onMouseDown={renderProps.onResultItemsMouseDown}
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
              </CardPos>
            </DropDown>
          </Pos>
        )}
      />
    )}
  />
)

SuggestField.defaultProps = {
  equals: (a: any, b: any) => a === b,
}
