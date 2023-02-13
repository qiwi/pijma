import React from 'react'
import renderer from 'react-test-renderer'

import { ThemeProvider, themes } from '@qiwi/pijma-core'

import { Container, Dropdown } from '../../main/ts'

describe('Dropdown', () => {
  it('is properly exported from lib index', () => {
    expect(Dropdown).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const dropdown = renderer
      .create(
        <Dropdown
          value="SUCCESSFUL"
          items={[
            {
              name: 'Все',
              value: '',
            },
            {
              name: 'Проведенные',
              value: 'SUCCESSFUL',
            },
            {
              name: 'Новые',
              value: 'NEW',
            },
            {
              name: 'Отклоненные',
              value: 'DECLINED',
            },
          ]}
          show={false}
          onChange={() => {
            /* noop */
          }}
        />,
      )
      .toJSON()
    expect(dropdown).toMatchSnapshot()
  })

  it('inner renders correctly', () => {
    const container = renderer
      .create(
        <ThemeProvider theme={themes.orange}>
          <Container
            value="SUCCESSFUL"
            items={[
              {
                name: 'Все',
                value: '',
              },
              {
                name: 'Проведенные',
                value: 'SUCCESSFUL',
              },
              {
                name: 'Новые',
                value: 'NEW',
              },
              {
                name: 'Отклоненные',
                value: 'DECLINED',
              },
            ]}
            onSelect={() => {
              /* noop */
            }}
          />
        </ThemeProvider>,
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
})
