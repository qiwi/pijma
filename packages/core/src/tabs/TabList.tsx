import React from 'react'

import {Flex} from '../primitive'

export interface TabListProps {
  center?: boolean
}

export class TabList extends React.Component<TabListProps, {}> {

  public render() {
    const {center, children} = this.props

    return (
      <Flex justify={center ? 'center' : 'flex-start'} mb={4}>
        {children}
      </Flex>
    )
  }

}
