import React from 'react'
import { MemoryRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import renderer from 'react-test-renderer'

import { NavigationMenu } from '../../main/ts'

const navItems = [
  { name: 'Транзакции', path: '/txn' },
  { name: 'Статистика и аналитика', path: '/' },
  { name: 'Документы', path: '/docs' },
  { name: 'Документы123', path: '/docs123' },
]

describe('NavigationMenu', () => {
  it('is properly exported from lib index', () => {
    expect(NavigationMenu).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <NavigationMenu link={NavLink} active={'/txn'} items={navItems} />
        </MemoryRouter>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <NavigationMenu link={NavLink} items={[]} />
        </MemoryRouter>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <NavigationMenu
            link={NavLink}
            active={'/fqefqw3fawe'}
            items={navItems}
          />
        </MemoryRouter>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const items = navItems.map(({ name: value }) => {
      const node = <div>{value}</div>
      return { value, node }
    })
    const component = renderer
      .create(
        <MemoryRouter>
          <NavigationMenu active={'Документы'} items={items} />
        </MemoryRouter>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const items = navItems.map(({ name: value }) => {
      const node = <div>{value}</div>
      return { value, node }
    })
    const component = renderer
      .create(
        <MemoryRouter>
          <NavigationMenu
            active={'Документы'}
            items={items}
            isItemSelected={() => {
              /* noop */
            }}
            onChange={() => {
              /* noop */
            }}
          />
        </MemoryRouter>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
