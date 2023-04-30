import React from 'react'
import renderer from 'react-test-renderer'

import { describe, expect, it } from '@jest/globals'

import { Paginator } from '../../main/ts'
import { ThemeProvider, themes } from '../../main/ts'

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
