import React from 'react'

import {Flex, Card, CardProps} from '../primitive'

export interface TabListProps {
  center?: boolean
  border?: 'long' | 'short'
  tab?: 'long' | 'short'
  vertical?: boolean
  bottom?: number
  indent?: 'xs' | 's' | 'm' | 'l'
  onKeyDown?: React.KeyboardEventHandler
}

const SpacerSize: {[indent in NonNullable<TabListProps['indent']>]: number} = {
  xs: 4,
  s: 8,
  m: 11,
  l: 17,
}

export class TabList extends React.Component<TabListProps & CardProps, {}> {

  public render() {
    const {center, children, border, indent, bottom, tab, ...props} = this.props

    const gap = border === 'long' && indent ? SpacerSize[indent] : 0

    const mb = (indent ? SpacerSize[indent] : SpacerSize['s']) / 2

    return (
      <Card
        bb={border ? '1px solid #e6e6e6' : ''}
        mb={bottom ? bottom : mb}
        mr={gap * -1}
        ml={gap * -1}
        pr={gap}
        pl={gap}
        overflow={'auto'}
        {...props}
      >
        <Flex justify={center ? 'center' : 'flex-start'}>{children}</Flex>
      </Card>
    )
  }

}
