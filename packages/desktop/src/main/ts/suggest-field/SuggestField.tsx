import {
  BasicInput,
  Box,
  Card,
  CardPos,
  Image,
  InputField,
  MenuControl,
  Pos,
  Spacer,
  styled,
  SuggestControl,
} from '@qiwi/pijma-core'
import React, { Fragment } from 'react'

import { DropDown } from '../drop-down'
import { Link } from '../link'
import { MenuItem } from '../menu'
import { Paragraph } from '../typography'
import { SuggestFieldOptionModel } from './SuggestFieldOptionModel'
import { SuggestFieldProps } from './SuggestFieldProps'

const CardMenuItem = styled(Card)().withComponent(MenuItem)

CardMenuItem.displayName = 'CardMenuItem'

export const SuggestField = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  ...props
}: SuggestFieldProps<SuggestFieldOptionModel<V>, V>) =>
  props.stub ? (
    <InputField
      stub
      input={false}
      active={false}
      title={props.title}
      help={props.help}
      hint={props.hint}
    />
  ) : (
    <SuggestControl<V, SuggestFieldOptionModel<V>>
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
        <MenuControl
          count={renderProps.items.length}
          selected={renderProps.selected}
          onSelect={renderProps.onItemSelect}
          onKeyDown={renderProps.onItemKeyDown}
          children={(menuRenderProps) => (
            <Pos
              type="relative"
              ref={renderProps.containerRef}
              transition={`box-shadow ${
                renderProps.focused ? 300 : 200
              }ms cubic-bezier(0.4, 0.0, 0.2, 1)`}
            >
              <Box
                width={1}
                onMouseEnter={renderProps.onInputMouseEnter}
                onMouseLeave={renderProps.onInputMouseLeave}
              >
                <InputField
                  title={props.title}
                  active={
                    renderProps.focused ||
                    !!props.suggest ||
                    !!props.placeholder
                  }
                  input={
                    <BasicInput
                      ref={renderProps.inputRef}
                      name={props.name}
                      disabled={props.disabled}
                      type={props.type}
                      value={props.suggest || ''}
                      tabIndex={props.tabIndex}
                      autoComplete={props.autoComplete}
                      autoFocus={props.autoFocus}
                      pr={props.hint ? 7 : undefined}
                      placeholder={props.placeholder}
                      maxLength={props.maxLength}
                      error={!!props.error}
                      focused={renderProps.focused}
                      onChange={renderProps.onRequest}
                      onFocus={renderProps.onInputFocus}
                      onBlur={renderProps.onInputBlur}
                      onKeyDown={
                        props.items !== undefined &&
                        renderProps.focused &&
                        (props.items.length > 0 || props.empty !== undefined)
                          ? menuRenderProps.onKeyDown
                          : renderProps.onItemKeyDown
                      }
                    />
                  }
                  hint={props.hint}
                  error={props.error}
                  help={props.help}
                  action={props.action}
                />
              </Box>
              <DropDown
                target={() => renderProps.inputRef.current!}
                container={() => renderProps.containerRef.current}
                minWidth={1}
                width="calc(100% + 48px)"
                offset={3}
                show={
                  props.items !== undefined &&
                  renderProps.focused &&
                  (props.items.length > 0 ||
                    props.empty !== undefined ||
                    props.loading === true)
                }
                rootClose={true}
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
                    Array.from({length: 4})
                      .fill(1)
                      .map((_item, key) => (
                        <CardMenuItem
                          key={key}
                          icon={true}
                          stub
                          text="stub"
                          notes="stub"
                        />
                      ))
                  ) : (
                    <Spacer size="s">
                      {menuRenderProps.items.length > 0 ? (
                        <Fragment>
                          {menuRenderProps.items.map((item, key) => (
                            <CardMenuItem
                              role="option"
                              key={key}
                              ref={item.ref}
                              onClick={item.onClick}
                              onMouseDown={item.onMouseDown}
                              onMouseEnter={item.onMouseEnter}
                              cursor="pointer"
                              text={renderProps.items[key].title}
                              notes={renderProps.items[key].description}
                              icon={
                                renderProps.items[key].logo ? (
                                  <Image
                                    stub={renderProps.items[key].stub}
                                    width={6}
                                    height={6}
                                    src={renderProps.items[key].logo}
                                  />
                                ) : undefined
                              }
                              hover={item.focused}
                              active={item.selected}
                              focus={item.selected}
                            />
                          ))}
                        </Fragment>
                      ) : null}
                      {props.empty && menuRenderProps.items.length === 0 ? (
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
                            ) : null}
                          </Paragraph>
                        </Box>
                      ) : null}
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

SuggestField.displayName = 'SuggestField'

SuggestField.defaultProps = {
  equals: (a: any, b: any) => a === b,
}
