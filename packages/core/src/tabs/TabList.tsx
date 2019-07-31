import React, {FC} from 'react'

import {Flex, Card, CardProps} from '../primitive'

export interface TabListProps {
  center?: boolean
  border?: boolean
  indent?: 'xs' | 's' | 'm' | 'l'
  onKeyDown?: React.KeyboardEventHandler
}

const SpacerSize: {[indent in NonNullable<TabListProps['indent']>]: number} = {
  xs: 4,
  s: 8,
  m: 11,
  l: 17,
}

export const TabList: FC<TabListProps & CardProps> = ({center, children, border = true, indent, ...props}) => {

  const gap = border && indent ? SpacerSize[indent] : 0

  const mb = (indent ? SpacerSize[indent] : SpacerSize['s']) / 2

  return (
    <Card
      bb={border ? '1px solid #e6e6e6' : ''}
      mb={mb}
      mr={gap * -1}
      ml={gap * -1}
      pr={gap}
      pl={gap}
      {...props}
    >
      <Flex justify={center ? 'center' : 'flex-start'} overflow={'auto'}>
        {children}
      </Flex>
    </Card>
  )
}
