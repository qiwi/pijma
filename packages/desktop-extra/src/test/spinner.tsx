import React from 'react'
import renderer from 'react-test-renderer'

import { B2bSpinner } from '../main'

describe('Offset', () => {
  it('is properly exported from lib index', () => {
    expect(B2bSpinner).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const offset = renderer.create(<B2bSpinner />).toJSON()
    expect(offset).toMatchSnapshot()
  })
})
