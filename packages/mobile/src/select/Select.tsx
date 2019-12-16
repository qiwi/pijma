import React, {FunctionComponent, ReactNode, Fragment} from 'react'

import {MenuItem} from '../menu'
import {DropUp} from '../drop-up'

import {SelectInput, SelectControl, Box, Pos, Card, MenuControl, styled, InputField, Icon, Spacer, OptionModel} from '@qiwi/pijma-core'

const CardPos = Card.withComponent(Pos)
const CardItem = styled(Card)().withComponent(MenuItem)

export interface SelectProps<I extends OptionModel<V>, V> {
  items: I[]
  title: string
  value: V
  tabIndex?: number
  error?: ReactNode
  disabled?: boolean
  name?: string
  autoFocus?: boolean
  onChange: (value: V) => void
  equals?: (a: V, b: V) => boolean
  autoComplete?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

export interface SelectItemModel<V> extends OptionModel<V> {
  text: string
}

export const Select: FunctionComponent<SelectProps<SelectItemModel<any>, any>> = (props) => (
  <SelectControl
    value={props.value}
    items={props.items}
    disabled={props.disabled}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    equals={props.equals}
    children={(renderProps) => (
      <MenuControl
        count={props.items.length}
        selected={renderProps.select}
        onKeyDown={renderProps.onKeyDown}
        onSelect={renderProps.onItemSelect}
        children={(menuRenderProps) => (
          <CardPos
            data-value={props.value.valueOf()}
            type="relative"
            width={1}
          >
            <Box
              width={1}
            >
              <Pos
                type="absolute"
                top={4}
                right={0}
                children={<Icon name="angle-down" color="#000"/>}
                transform={`rotate(${renderProps.show ? 180 : 0}deg)`}
                transition="transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
              />
              <InputField
                title={props.title}
                active={renderProps.show || renderProps.select !== undefined}
                error={props.error}
                input={
                  <SelectInput
                    value={(renderProps.select !== undefined) && props.items[renderProps.select] ? props.items[renderProps.select].text : ''}
                    focused={renderProps.focused}
                    error={!!props.error}
                    tabIndex={props.tabIndex}
                    disabled={props.disabled}
                    autoComplete={props.autoComplete}
                    autoFocus={props.autoFocus}
                    name={props.name}
                    onFocus={renderProps.onFocus}
                    onBlur={renderProps.onMobileBlur}
                    onKeyDown={renderProps.onKeyDown}
                    onClick={renderProps.onActive}
                  />
                }
              />
            </Box>
            <DropUp
              title={props.title}
              show={renderProps.show}
              onHide={renderProps.onHide}
              onKeyDown={menuRenderProps.onKeyDown}
            >
              <CardPos
                height={1}
                width={1}
                ref={menuRenderProps.containerRef}
              >
                <CardPos
                  s="0 20px 64px 0 rgba(0, 0, 0, 0.16)"
                  bg="#fff"
                  overflow="auto"
                  maxWidth={1}
                  pt={3}
                  pb={3}
                  ref={renderProps.modalRef}
                >
                  <Spacer size="s">
                    <Fragment>
                      {menuRenderProps.items.map((item, key) => (
                        <CardItem
                          key={key}
                          ref={item.ref}
                          cursor="pointer"
                          text={props.items[key].text}
                          hover={item.focused}
                          active={item.selected}
                          focus={item.selected}
                          onClick={item.onClick}
                          onMouseEnter={item.onMouseEnter}
                        />
                      ))}
                    </Fragment>
                  </Spacer>
                </CardPos>
              </CardPos>
            </DropUp>
          </CardPos>
        )}
      />
    )}
  />
)
