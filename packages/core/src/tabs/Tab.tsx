import React, {ReactNode, Children} from 'react'

import {Box, Flex} from '../primitive'

export interface TabProps {
  vertical?: boolean
}

export class Tab extends React.Component<TabProps, {}> {

  public tabsRole: string = 'Tab'
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
