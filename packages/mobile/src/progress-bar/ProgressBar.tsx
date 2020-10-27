import React, {FC} from 'react'
import {Card, Stub} from '@qiwi/pijma-core'

export interface ProgressBarProps {
  value: number
  disabled?: boolean
  stub?: boolean
}

export const ProgressBar: FC<ProgressBarProps> = ({
  value,
  disabled = false,
  stub = false,
}) => (
  stub ? (
    <Stub height={6} width={1} r={12}/>
  ) : (
    <Card bg="#f5f5f5" height={6} r={12} p={1}>
      <Card
        bg={disabled ? '#ccc' : 'linear-gradient(268deg, #ff8c00 99%, #ff7700)'}
        height={4}
        width={value}
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        minWidth={4}
        r={8}
      />
    </Card>
  )

)

ProgressBar.displayName = 'ProgressBar'
