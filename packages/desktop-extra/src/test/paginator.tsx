import React from 'react'
import renderer from 'react-test-renderer'

import { Paginator } from '../main'

describe('Paginator', () => {
  it('is properly exported from lib index', () => {
    expect(Paginator).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const paginator = renderer
      .create(
        <Paginator
          activePage={2}
          totalItemsCount={40}
          pageRangeDisplayed={5}
          itemsCountPerPage={10}
        />,
      )
      .toJSON()
    expect(paginator).toMatchSnapshot()
  })
})
