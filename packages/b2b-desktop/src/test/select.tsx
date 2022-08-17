import { ThemeProvider, themes } from '@qiwi/pijma-core'
import React from 'react'
import renderer from 'react-test-renderer'

import { Select } from '../main'

describe('Select', () => {
  it('closed renders correctly', () => {
    const select = renderer
      .create(
        <ThemeProvider theme={themes.orange}>
          <Select
            value="name"
            items={[{ name: 'name', value: 'value' }]}
            onChange={() => {
              /* noop */
            }}
            title="test"
          />
        </ThemeProvider>,
      )
      .toJSON()
    expect(select).toMatchSnapshot()
  })
})
