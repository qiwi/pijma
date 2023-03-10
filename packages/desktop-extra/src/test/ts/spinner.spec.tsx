import React from 'react'
import renderer from 'react-test-renderer'

import { describe, expect, it } from '@jest/globals'

import { B2bSpinner } from '../../main/ts'

describe('Offset', () => {
  it('is properly exported from lib index', () => {
    expect(B2bSpinner).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const offset = renderer.create(<B2bSpinner />).toJSON()
    expect(offset).toMatchSnapshot()
  })
})
