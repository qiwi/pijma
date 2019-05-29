import React, {ReactNode, Children} from 'react'

import {Box, Flex} from '../primitive'

export interface TabProps {
  vertical?: boolean
  index: number
  selected?: boolean
  onSelect?: (selected: number) => void
}

export class Tab extends React.Component<TabProps, {}> {

  public tabsRole: string = 'Tab'

  private onClick: React.MouseEventHandler = () => {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.index)
    }
  }
  public render() {
    const {vertical, children} = this.props
    const elements = Children.toArray(children).filter(child => !!child)
    if (elements.length === 0) {
      return null
    }
    return (
      <Flex direction={vertical ? 'column' : 'row'} onClick={this.onClick}>
        {Children.map(elements, (child: ReactNode, key: number) => (
          <Box key={key} children={child} />
        ))}
      </Flex>
    )
  }

}
