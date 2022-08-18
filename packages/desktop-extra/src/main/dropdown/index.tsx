import { Overlay, styled } from '@qiwi/pijma-core'
import React, { Component, Fragment } from 'react'

import { Container } from './Container'
import DropdownProps from './DropdownProps'

export const ContainerModal = styled('div')`
  position: relative;
  width: 100%;
`

class Dropdown extends Component<DropdownProps> {
  myRef: any

  constructor(props: DropdownProps) {
    super(props)
    this.myRef = React.createRef()
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(el: any) {
    if (this.props.onChange) {
      if (this.props.multiSelect && this.props.focus) {
        this.props.focus()
      }
      this.props.onChange(el)
    }
  }

  render() {
    const { value, items, show, multiSelect, renderItem } = this.props

    return (
      <Fragment>
        <ContainerModal ref={this.myRef} />
        <Overlay
          show={show}
          placement="bottom"
          container={this.myRef.current}
          target={this.myRef.current}
        >
          {() => (
            <Container
              multiSelect={multiSelect}
              items={items}
              value={value}
              onSelect={this.onSelect}
              renderItem={renderItem}
            />
          )}
        </Overlay>
      </Fragment>
    )
  }
}

export { Dropdown, Container }
