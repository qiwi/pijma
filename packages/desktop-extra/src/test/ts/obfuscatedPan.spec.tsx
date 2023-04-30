import React from 'react'
import renderer from 'react-test-renderer'

import { describe, expect, it } from '@jest/globals'

import { ObfuscatedPan } from '../../main/ts'

describe('ObfuscatedPan', () => {
  it('is properly exported from lib index', () => {
    expect(ObfuscatedPan).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const obfuscatedPan = renderer
      .create(<ObfuscatedPan panPrefix="*" pan="4272291111221978" />)
      .toJSON()
    expect(obfuscatedPan).toMatchSnapshot()
  })
})
