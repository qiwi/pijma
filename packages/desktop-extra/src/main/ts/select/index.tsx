import { Icon, styled } from '@qiwi/pijma-core'
import { TextField } from '@qiwi/pijma-desktop'
import React, { Component } from 'react'

import { Dropdown } from '../dropdown'
import SelectProps from './SelectProps'
import SelectState from './SelectState'

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isempty
const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

const Container = styled('div')`
  position: relative;
  outline: none;
`

const IconWrapper = styled('div')`
  width: 24px;
  height: 24px;
  display: inline-block;
`

export class Select extends Component<SelectProps, SelectState> {
  _timeoutID: any
  inputRef: any
  currentItem: any

  constructor(props: SelectProps) {
    super(props)
    this.currentItem = this.props.value || this.props.defaultItem
    this.state = {
      isOpen: false,
      currentItem:
        this.props.items.find((el) => el.value === this.currentItem) || {},
    }
    this.inputRef = React.createRef()
    this._timeoutID = -1
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.selectItem = this.selectItem.bind(this)
  }

  onFocus() {
    if (this.props.disabled) {
      return
    }

    clearTimeout(this._timeoutID)
    this.setState({ isOpen: true })
  }

  onBlur() {
    if (this.props.disabled) {
      return
    }

    this._timeoutID = setTimeout(() => {
      this.setState({ isOpen: false })
    }, 10)
  }

  selectItem(el: any) {
    clearTimeout(this._timeoutID)
    if (this.props.onChange) {
      if (this.props.multiSelect) {
        this.props.onChange(el)
        if (!el) {
          this.onBlur()
        }
      } else {
        this.props.onChange(el.value)
        this.onBlur()
      }
    }
    if (!this.props.value) {
      this.setState({ isOpen: false, currentItem: el })
    }
  }

  focusOnInput = () => {
    this.inputRef.current.focus()
  }

  render() {
    const {
      items,
      title,
      defaultItem,
      value,
      error,
      multiSelect,
      mapping,
      emptyValue,
      renderItem,
    } = this.props

    const currentItem = items.find((el) => el.value === value) || {
      name: '',
      value: '',
    }
    const valueName =
      currentItem.name ||
      (this.state.currentItem && this.state.currentItem.name) ||
      defaultItem
    let multiValue = valueName
    if (multiSelect && typeof value !== 'string') {
      multiValue = value.map((el: any) => mapping[el])
    }

    return (
      <Container
        onFocus={this.onFocus}
        tabIndex={0}
        ref={this.inputRef}
        onBlur={this.onBlur}
      >
        <TextField
          {...this.props}
          autoFocus={this.state.focus}
          title={title || ''}
          onChange={() => {
            /* noop */
          }}
          onBlur={
            multiSelect
              ? () => {
                  /* noop */
                }
              : this.onBlur
          }
          value={
            !isEmpty(multiValue)
              ? [].concat(multiValue).join(', ')
              : emptyValue || ''
          }
          hint={
            <IconWrapper onClick={this.focusOnInput}>
              <Icon name="angle-small-down" />
            </IconWrapper>
          }
          error={error}
        />
        <Dropdown
          show={this.state.isOpen}
          items={items}
          value={multiSelect ? value : valueName}
          onChange={this.selectItem}
          focus={this.focusOnInput}
          multiSelect={multiSelect}
          renderItem={renderItem}
        />
      </Container>
    )
  }
}
