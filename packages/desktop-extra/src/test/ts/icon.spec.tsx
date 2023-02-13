import React from 'react'
import renderer from 'react-test-renderer'

import { B2bIcon } from '../../main/ts'

describe('Icon', () => {
  it('is properly exported from lib index', () => {
    expect(B2bIcon).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <B2bIcon
          // @ts-ignore
          icon="plus"
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <B2bIcon
          // @ts-ignore
          icon="plus"
          iconColor="#FF0000"
          h={50}
          w={50}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
