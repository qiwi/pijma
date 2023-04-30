import React, { FC } from 'react'

import { Card, getDataProps, Stub } from '@qiwi/pijma-core'

export interface ProgressBarProps {
  value: number
  disabled?: boolean
  stub?: boolean
}

export const ProgressBar: FC<ProgressBarProps> = ({
  value,
  disabled = false,
  stub = false,
  ...rest
}) =>
  stub ? (
    <Stub height={10} width={1} r={20} />
  ) : (
    <Card {...getDataProps(rest)} bg="#f5f5f5" height={10} r={20} p={2}>
      <Card
        bg={disabled ? '#ccc' : 'linear-gradient(268deg, #ff8c00 99%, #ff7700)'}
        height={6}
        width={value}
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        minWidth={6}
        r={12}
      />
    </Card>
  )

ProgressBar.displayName = 'ProgressBar'
