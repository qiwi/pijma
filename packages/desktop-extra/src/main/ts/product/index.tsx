import { Flex, Icon, styled } from '@qiwi/pijma-core'
import React, { Component } from 'react'

import { Dropdown } from '../dropdown'
import { COLOR } from '../theme'
import ProductProps from './ProductProps'
import ProductState from './ProductState'

const ProductType = styled('div')`
  font-weight: 500;
  font-size: 14px;
  color: ${COLOR.TEXT.Primary};
`

const ProductMerchant = styled('div')`
  font-size: 12px;
  font-weight: 300;
  color: ${COLOR.TEXT.Secondary2};
`

const Container = styled('div')`
  color: black;
  position: relative;
  width: 100%;
  top: -10px;
  left: -1px;
`

const IconWrapper = styled('div')`
  width: 24px;
  height: 24px;
  display: inline-block;
`

const ProductWrapper = styled('div')``

export class Product extends Component<ProductProps, ProductState> {
  _timeoutID: any
  constructor(props: ProductProps) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this._timeoutID = -1
  }

  onFocus() {
    clearTimeout(this._timeoutID)
    this.setState({ isOpen: !this.state.isOpen })
  }

  onBlur() {
    this._timeoutID = setTimeout(() => {
      this.setState({ isOpen: false })
    }, 10)
  }

  render() {
    const { selectorData, title, onChange } = this.props
    const isShownDropdown = selectorData.items
      ? selectorData.items.length > 1
      : null

    return (
      <ProductWrapper>
        <ProductType>{title}</ProductType>
        <ProductMerchant
          tabIndex={0}
          onClick={this.onFocus}
          onBlur={this.onBlur}
        >
          <Flex align="center">
            <span>{selectorData.currentItem}</span>
            {isShownDropdown && (
              <IconWrapper>
                <Icon name="angle-small-down" />
              </IconWrapper>
            )}
          </Flex>
        </ProductMerchant>
        {isShownDropdown && (
          <Container>
            <Dropdown
              show={this.state.isOpen}
              items={selectorData.items || []}
              value={selectorData.currentItem}
              onChange={onChange}
            />
          </Container>
        )}
      </ProductWrapper>
    )
  }
}
