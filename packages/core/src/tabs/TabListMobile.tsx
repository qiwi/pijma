import React, {FC} from 'react'

import {Flex, Card, CardProps} from '../primitive'

export interface TabListTabListMobileProps {
  center?: boolean
  border?: boolean
  indent?: 'm' | 'l'
  onKeyDown?: React.KeyboardEventHandler
}

const SpacerSize: {[indent in NonNullable<TabListTabListMobileProps['indent']>]: number} = {
  m: 4,
  l: 6,
}

export const TabListMobile: FC<TabListTabListMobileProps & CardProps> = ({center, children, border = true, indent, ...props}) => {

  const gap = border && indent ? SpacerSize[indent] : 0

  const mb = (indent ? SpacerSize[indent] : SpacerSize['m']) / 2

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
