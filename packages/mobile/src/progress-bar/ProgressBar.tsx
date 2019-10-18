import React, {FC} from 'react'
import {Card} from '@qiwi/pijma-core'

export interface ProgressBarProps {
  value: number
  disabled?: boolean
}

export const ProgressBar: FC<ProgressBarProps> = ({value, disabled = false}) => (
  <Card bg="#f5f5f5" height={6} r={24} p={1}>
    <Card
      bg={disabled ? '#ccc' : 'linear-gradient(268deg, #ff8c00 99%, #ff7700)'}
      height={4}
      width={value}
      minWidth={4}
      r={16}
    />
  </Card>
)
