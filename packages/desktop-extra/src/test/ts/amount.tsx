import React from 'react'
import renderer from 'react-test-renderer'

import { Amount } from '../../main/ts'

describe('Amount', () => {
  it('is properly exported from lib index', () => {
    expect(Amount).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const amount = renderer
      .create(<Amount value="100000" currency="RUB" />)
      .toJSON()
    expect(amount).toMatchSnapshot()
  })
})
