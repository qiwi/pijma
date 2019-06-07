import React from 'react'

import {Flex, Card} from '../primitive'

export interface TabListProps {
  center?: boolean
  border?: boolean
  vertical?: boolean
  bottom?: number
}

export class TabList extends React.Component<TabListProps, {}> {

  public render() {
    const {center, children, border, bottom = 4} = this.props

    return (
      <Card bb={border ? '1px solid #e6e6e6' : ''} mb={bottom}>
        <Flex justify={center ? 'center' : 'flex-start'}>{children}</Flex>
      </Card>
    )
  }

}
