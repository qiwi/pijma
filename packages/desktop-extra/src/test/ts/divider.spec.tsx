import React from 'react'
import renderer from 'react-test-renderer'

import { Divider } from '../../main/ts'
import { ThemeProvider, themes } from '../../main/ts'

describe('Divider', () => {
  it('is properly exported from lib index', () => {
    expect(Divider).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const divider = renderer
      .create(
        <ThemeProvider theme={themes.orange}>
          <Divider active />
        </ThemeProvider>,
      )
      .toJSON()
    expect(divider).toMatchSnapshot()
  })
})
