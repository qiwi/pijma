import React from 'react'
import renderer from 'react-test-renderer'

import { ThemeProvider, themes } from '@qiwi/pijma-core'

import { describe, expect, it } from '@jest/globals'

import { Select } from '../../main/ts'

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
