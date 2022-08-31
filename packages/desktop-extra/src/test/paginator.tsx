import { ThemeProvider, themes } from '@qiwi/pijma-desktop'
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
        <ThemeProvider theme={themes.orange}>
          <Paginator
            activePage={2}
            totalItemsCount={40}
            itemsCountPerPage={10}
          />
        </ThemeProvider>,
      )
      .toJSON()
    expect(paginator).toMatchSnapshot()
  })
})
