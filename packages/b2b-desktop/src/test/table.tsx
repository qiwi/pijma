import React from 'react'
import renderer from 'react-test-renderer'

import { columnFactory, Table } from '../main'

describe('Table', () => {
  it('is properly exported from lib index', () => {
    expect(Table).not.toBeUndefined()
  })
})

describe('columnFactory', () => {
  it('handles supported types', () => {
    const cases = ['foo', 'bar', 10, { accessor: 'baz' }]
    const mapping = { foo: { accessor: 'test' } }
    const result = cases.map(el => columnFactory(el, mapping))

    expect(result).toEqual([
      { accessor: 'test' },
      { accessor: 'bar' },
      { width: 10 },
      { accessor: 'baz' },
    ])
  })

  it('throws err otherwise', () => {
    expect(() => columnFactory()).toThrow('unsupported table column type: undefined')
  })

  it('renders correctly', () => {
    const table = renderer
      .create(
        <Table
          data={[{ name: 'qwe', value: 'qweasd' }]}
          onSelect={() => { /* noop */ }}
          columns={[
            { accessor: 'name' },
            { accessor: 'value' },
          ]}
        />)
      .toJSON()
    expect(table).toMatchSnapshot()
  })
})
