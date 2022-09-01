import { ThemeProvider, themes } from '@qiwi/pijma-core'
import React from 'react'
import renderer from 'react-test-renderer'

import { DatePicker } from '../../main/ts'

describe('DatePicker', () => {
  it('is properly exported from lib index', () => {
    expect(DatePicker).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const datePicker = renderer
      .create(
        <ThemeProvider theme={themes.orange}>
          <DatePicker title="Date" />
        </ThemeProvider>,
        {
          createNodeMock: (element) => {
            if (element.type === 'input') {
              // mock a focus function
              return {
                focus: () => {
                  /* noop */
                },
              }
            }
            return null
          },
        },
      )
      .toJSON()
    expect(datePicker).toMatchSnapshot()
  })
})
