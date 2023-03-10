import React from 'react'
import renderer from 'react-test-renderer'

import { describe, expect, it } from '@jest/globals'

import { Offset } from '../../main/ts'

describe('Offset', () => {
  it('is properly exported from lib index', () => {
    expect(Offset).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const offset = renderer.create(<Offset />).toJSON()
    expect(offset).toMatchSnapshot()
  })
})
