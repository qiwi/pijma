import React, { Component } from 'react'

import { styled, Typo } from '@qiwi/pijma-core'
import { CheckboxField } from '@qiwi/pijma-desktop'

import { COLOR } from '../theme'
import ContainerProps, { DropdownItem } from './ContainerProps'

export const ListContainer = styled('div')`
  position: absolute;
  min-width: 200px;
  width: 100%;
  top: -10px !important;
  padding: 10px 0;
  z-index: 10;
  display: block;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: ${COLOR.SHADOW.Z3};
  overflow: auto;
  // max-height: 200px;
`

export const CheckBoxContainer = styled('div')`
  padding: 5px;
`

export const Item = styled('div')`
  box-sizing: border-box;
  padding: 10px 24px;
  width: 100%;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
  &--active {
    background-color: #e6e6e6 !important;
  }
  ${(
    props, // @ts-ignore
  ) => (props.active ? 'background-color: #E6E6E6 !important;' : '')}
`

export const ScrollContainer = styled('div')`
  position: relative;
  height: 100%;
`

class Container extends Component<ContainerProps> {
  render() {
    const { items, value, onSelect, multiSelect, renderItem } = this.props
    return (
      <ListContainer>
        <ScrollContainer>
          {multiSelect ? (
            <CheckBoxContainer>
              <CheckboxField
                options={items.map((el: any) => ({
                  label: el.name,
                  value: el.value,
                }))}
                values={value}
                onChange={onSelect}
              />
            </CheckBoxContainer>
          ) : (
            items.map((el: DropdownItem, index: number) => (
              <Item
                // @ts-ignore
                active={value === el.name}
                key={index}
                onMouseDown={() => onSelect(el)}
              >
                {renderItem ? renderItem(el) : <Typo nowrap>{el.name}</Typo>}
              </Item>
            ))
          )}
        </ScrollContainer>
      </ListContainer>
    )
  }
}

export { Container }
