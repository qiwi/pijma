import { ThemeProvider, themes } from '@qiwi/pijma-core'
import React from 'react'
import renderer from 'react-test-renderer'

import { DateRangePicker } from '../main'

describe('DateRangePicker', () => {
  it('is properly exported from lib index', () => {
    expect(DateRangePicker).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const dateRangePicker = renderer
      .create(
        <ThemeProvider theme={themes.orange}>
          <DateRangePicker
            onChange={() => {
              /* noop */
            }}
            dateTo={new Date('5/8/2019')}
            dateFrom={new Date('5/8/2019')}
            title="Date"
          />
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
    expect(dateRangePicker).toMatchSnapshot()
  })
})
