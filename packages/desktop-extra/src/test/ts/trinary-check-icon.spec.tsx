import React from 'react'
import renderer from 'react-test-renderer'

import { describe, expect, it } from '@jest/globals'

import { TrinaryCheckIcon } from '../../main/ts'

describe('TrinaryCheckIcon', () => {
  it('is properly exported from lib index', () => {
    expect(TrinaryCheckIcon).not.toBeUndefined()
  })

  it('renders correctly unchecked', () => {
    const icon = renderer.create(<TrinaryCheckIcon value={0} />).toJSON()
    expect(icon).toMatchSnapshot()
  })

  it('renders correctly half-checked', () => {
    const icon = renderer.create(<TrinaryCheckIcon value={1} />).toJSON()
    expect(icon).toMatchSnapshot()
  })

  it('renders correctly checked', () => {
    const icon = renderer.create(<TrinaryCheckIcon value={2} />).toJSON()
    expect(icon).toMatchSnapshot()
  })
})
