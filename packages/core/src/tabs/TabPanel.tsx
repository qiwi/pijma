import React, {ReactNode, Children} from 'react'

import {Box, Flex} from '../primitive'

export interface TabPanelProps {
  vertical?: boolean
}

export class TabPanel extends React.Component<TabPanelProps, {}> {

  public tabsRole: string = 'TabPanel'
  public render() {
    const {vertical, children} = this.props
    const elements = Children.toArray(children).filter(child => !!child)
    if (elements.length === 0) {
      return null
    }
    return (
      <Flex direction={vertical ? 'column' : 'row'}>
        {Children.map(elements, (child: ReactNode, key: number) => (
          <Box key={key} children={child} />
        ))}
      </Flex>
    )
  }

}
