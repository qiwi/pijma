import React, {FunctionComponent, ReactNode, Fragment} from 'react'
import {Manager, Popper, Reference} from 'react-popper'
import {Transition} from 'react-transition-group'
import {TransitionStatus} from 'react-transition-group/Transition'

import {MenuItem} from '../menu'

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

const timeout = 150

const defaultStyle = {
  transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
  opacity: 0,
  transform: `translateY(${-12}px)`,
}

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: `translateY(${-12}px)`,
  },
  entered: {
    opacity: 1,
    transform: `translateY(${0}px)`,
  },
  exiting: {
    opacity: 0,
    transform: `translateY(${-12}px)`,
  },
  exited: {
    opacity: 0,
    transform: `translateY(${-12}px)`,
  },
  unmounted: {
    opacity: 0,
  },
}

export const Select: FunctionComponent<SelectProps<SelectItemModel<any>, any>> = (props) => (
  <Manager>
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
              type="relative"
              width={1}
            >
              <Reference
                children={({ref}) => (
                  <Box
                    ref={ref}
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
                          onBlur={renderProps.onBlur}
                          onKeyDown={renderProps.show ? menuRenderProps.onKeyDown : renderProps.onKeyDown}
                          onClick={renderProps.onActive}
                        />
                      }
                    />
                  </Box>
                )}
              />
              <Transition
                timeout={timeout}
                in={renderProps.show}
                unmountOnExit
              >
                {(state: TransitionStatus) => (
                  <Popper
                    placement="bottom"
                    modifiers={{
                      computeStyle: {gpuAcceleration: false},
                      flip: {enabled: false},
                      preventOverflow: {enabled: false},
                      hide: {enabled: false},
                    }}
                  >
                    {({ref, style: {position, top, left, willChange}}) => (
                      <CardPos
                        ref={ref}
                        style={{
                          ...defaultStyle,
                          ...transitionStyles[state],
                          position,
                          top,
                          left,
                          willChange,
                          zIndex: 999,
                        }}
                        height={1}
                        width="calc(100% + 48px)"
                        mt={-2}
                      >
                        <CardPos
                          ref={menuRenderProps.containerRef}
                          r="10px"
                          s="0 20px 64px 0 rgba(0, 0, 0, 0.16)"
                          bg="#fff"
                          overflow="auto"
                          minHeight={1}
                          maxHeight={104}
                          pt={3}
                          pb={3}
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
                                  onMouseDown={item.onMouseDown}
                                  onMouseEnter={item.onMouseEnter}
                                />
                              ))}
                            </Fragment>
                          </Spacer>
                        </CardPos>
                      </CardPos>
                    )}
                  </Popper>
                )}
              </Transition>
            </CardPos>
          )}
        />
      )}
    />
  </Manager>
)
