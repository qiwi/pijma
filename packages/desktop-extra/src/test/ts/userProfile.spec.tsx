import React from 'react'
import renderer from 'react-test-renderer'

import { describe, expect, it } from '@jest/globals'

import { UserProfile } from '../../main/ts'

describe('UserProfile', () => {
  it('is properly exported from lib index', () => {
    expect(UserProfile).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <UserProfile
          userName={'testName'}
          onClick={() => {
            /* noop */
          }}
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('renders correctly', () => {
    const component = renderer.create(<UserProfile />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
