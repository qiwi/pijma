import React from 'react'

import ObfuscatedPanProps from './ObfuscatedPanProps'

export const ObfuscatedPan = ({ pan, panPrefix = '*' }: ObfuscatedPanProps) => {
  return (
    <span>
      {panPrefix}
      {pan ? pan.slice(-4) : null}
    </span>
  )
}
