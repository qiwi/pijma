import React from 'react'
import renderer from 'react-test-renderer'

import { Checkbox } from '../../main/ts'

describe('Checkbox', () => {
  it('is properly exported from lib index', () => {
    expect(Checkbox).not.toBeUndefined()
  })

  it('renders correctly unchecked value in trinary mode', () => {
    const checkbox = renderer.create(<Checkbox value={0} trinary />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })

  it('renders correctly half-checked value in trinary mode', () => {
    const checkbox = renderer.create(<Checkbox value={1} trinary />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })

  it('renders correctly checked value in trinary mode', () => {
    const checkbox = renderer.create(<Checkbox value={2} trinary />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })

  it('renders correctly unchecked value', () => {
    const checkbox = renderer.create(<Checkbox value={false} />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })

  it('renders correctly checked value', () => {
    const checkbox = renderer.create(<Checkbox value={true} />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
})
