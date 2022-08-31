import React from 'react'
import { MemoryRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import renderer from 'react-test-renderer'

import { Header, ThemeProvider, themes } from '../main'

const navItems = [
  { name: 'Транзакции', path: '/txn' },
  { name: 'Статистика и аналитика', path: '/' },
  { name: 'Документы', path: '/docs' },
  { name: 'Документы123', path: '/docs123' },
]

describe('Header', () => {
  it('is properly exported from lib index', () => {
    expect(Header).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const header = renderer
      .create(
        <MemoryRouter>
          <ThemeProvider theme={themes.orange}>
            <Header
              isLoading={false}
              title={'Выплаты'}
              userName={'best_test@test.ru'}
              selectorData={{
                items: ['Test_Agent'],
                currentItem: 'Test_Agent',
              }}
              // @ts-ignore
              link={NavLink}
              navItems={navItems}
              navActiveItem={{ pathname: '/docs' }}
              onItemChange={() => {
                /* noop */
              }}
              onLogout={() => {
                /* noop */
              }}
            />
          </ThemeProvider>
        </MemoryRouter>,
      )
      .toJSON()
    expect(header).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const header = renderer
      .create(
        <MemoryRouter>
          <ThemeProvider theme={themes.orange}>
            <Header
              isLoading={false}
              title={'Выплаты'}
              userName={'best_test@test.ru'}
              selectorData={{
                items: [],
                currentItem: '',
              }}
              // @ts-ignore
              link={NavLink}
              navItems={navItems}
              onItemChange={() => {
                /* noop */
              }}
              onLogout={() => {
                /* noop */
              }}
            />
          </ThemeProvider>
        </MemoryRouter>,
      )
      .toJSON()
    expect(header).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const header = renderer
      .create(
        <MemoryRouter>
          <ThemeProvider theme={themes.orange}>
            <Header
              isLoading={false}
              title={'Выплаты'}
              userName={'best_test@test.ru'}
              selectorData={{
                items: [],
                currentItem: '',
              }}
              // @ts-ignore
              link={NavLink}
              navItems={[]}
              onItemChange={() => {
                /* noop */
              }}
              onLogout={() => {
                /* noop */
              }}
            />
          </ThemeProvider>
        </MemoryRouter>,
      )
      .toJSON()
    expect(header).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const header = renderer
      .create(
        <MemoryRouter>
          <ThemeProvider theme={themes.orange}>
            <Header
              isLoading
              title={'Выплаты'}
              userName={''}
              selectorData={{
                items: [],
                currentItem: '',
              }}
              // @ts-ignore
              link={NavLink}
              navItems={navItems}
            />
          </ThemeProvider>
        </MemoryRouter>,
      )
      .toJSON()
    expect(header).toMatchSnapshot()
  })
})
