import React, {ReactNode} from 'react'

import {Box, Flex, Typo, Pos, Card} from '../primitive'

export interface TabProps {
  vertical?: boolean
  index: number
  tabIndex?: number
  selected?: boolean
  focused?: boolean
  active?: boolean
  icon?: ReactNode
  onSelect?: (selected: number) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export class Tab extends React.Component<TabProps, {}> {

  defaultProps = {
    tabIndex: 0,
  }

  private onClick: React.MouseEventHandler = () => {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.index)
    }
  }
  public render() {
    const {
      vertical,
      children,
      icon,
      selected,
      focused,
      onMouseEnter,
      onMouseLeave,
    } = this.props

    return (
      <Box
        mr={6.5}
        cursor="pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Pos type="relative" width={1} height={1}>
          <Flex
            direction={vertical ? 'column' : 'row'}
            onClick={this.onClick}
            pb={4}
          >
            {icon ? <Box children={icon} height="6" /> : null}
            <Typo
              display="block"
              color={selected ? '#000' : focused ? '#ff8c00' : '#666'}
              weight={500}
              size={4}
              height={6}
              children={children}
            />
          </Flex>
          {selected ? (
            <Pos type="absolute" bottom={0} height="4px" width={1}>
              <Card bg="#ff8c00" r={4} height="4px" width={1} />
            </Pos>
          ) : null}
        </Pos>
      </Box>
    )
  }

}
