import React from 'react'
import renderer from 'react-test-renderer'

import { Product } from '../../main/ts'

describe('Product', () => {
  it('is properly exported from lib index', () => {
    expect(Product).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <Product
          title={'title_qwe'}
          onChange={() => {
            /* noop */
          }}
          selectorData={{
            currentItem: 'CurrItemms123',
            items: [],
          }}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const items = [
      { name: 'Payout_Test', value: 'LNgEv2mW' },
      { name: 'CurrItemms123', value: 'LNgEv2mW142341234' },
      { name: 'Payout_Test123', value: 'LNgEv2mW123' },
    ]

    const component = renderer
      .create(
        <Product
          title={'title_qwe'}
          onChange={() => {
            /* noop */
          }}
          selectorData={{
            currentItem: 'CurrItemms123',
            items,
          }}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
