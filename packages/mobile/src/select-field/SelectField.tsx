import React, {FunctionComponent, ReactNode} from 'react'

import {
  SelectInput,
  SelectFieldControl,
  Pos,
  Card,
  MenuControl,
  styled,
  InputField,
  Icon,
  OptionModel,
  CardOptions,
} from '@qiwi/pijma-core'

import {MenuItem} from '../menu'
import {DropUp} from '../drop-up'

const CardPos = styled(Card, CardOptions)().withComponent(Pos)
const CardItem = styled(Card, CardOptions)().withComponent(MenuItem)

export interface SelectFieldProps<I extends OptionModel<V>, V> {
  items: I[]
  title: string
  value: V
  stub?: boolean
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
  onHide?: () => void
}

export interface SelectFieldItemModel<V> extends OptionModel<V> {
  text: string
}

export const SelectField: FunctionComponent<SelectFieldProps<SelectFieldItemModel<any>, any>> = (props) => (
  props.stub ? (
    <InputField
      active={false}
      input={false}
      title={props.title}
      error={props.error}
      stub
    />
  ) : (
    <SelectFieldControl
      value={props.value}
      items={props.items}
      disabled={props.disabled}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onHide={props.onHide}
      equals={props.equals}
      children={(renderProps) => (
        <MenuControl
          count={props.items.length}
          selected={renderProps.select}
          onKeyDown={renderProps.onKeyDown}
          onSelect={renderProps.onItemSelect}
          children={(menuRenderProps) => (
            <CardPos
              type="relative"
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
                active={renderProps.select !== undefined}
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
              <DropUp
                title={props.title}
                show={renderProps.show}
                onHide={renderProps.onHide}
                onKeyDown={menuRenderProps.onKeyDown}
              >
                <CardPos
                  height={1}
                  width={1}
                  ref={renderProps.modalRef}
                  pt={-20}
                >
                  <CardPos
                    type="relative"
                    s="0 20px 64px 0 rgba(0, 0, 0, 0.16)"
                    bg="#fff"
                    height={1}
                    pt={3}
                    pb={3}
                    ref={menuRenderProps.containerRef}
                    overflow="auto"
                  >
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
                  </CardPos>
                </CardPos>
              </DropUp>
            </CardPos>
          )}
        />
      )}
    />
  )
)
