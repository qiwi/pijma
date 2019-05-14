import React, {ReactNode} from 'react'

import {Flex, Box, FlexItem, Card} from '../primitive'

interface AccordionItemProps {
  openedIcon: ReactNode
  closedIcon: ReactNode
  title: ReactNode
  content: ReactNode
  isOpened: boolean
  isHovered: boolean
  isNextHovered: boolean
  index: number
  onClick: (index: number) => void
  onMouseEnter: (index: number) => void
}

export default class AccordionItem extends React.Component<AccordionItemProps> {

  private onClick: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    this.props.onClick(this.props.index)
  }

  private onMouseEnter: React.MouseEventHandler<HTMLElement> = () => {
    this.props.onMouseEnter(this.props.index)
  }

  public render() {
    const {
      openedIcon,
      closedIcon,
      title,
      content,
      isOpened,
      isHovered,
      isNextHovered,
    } = this.props
    return (
      <Card
        onMouseEnter={this.onMouseEnter}
        bb={isHovered || isNextHovered ? '1px solid transparent' : '1px solid #e6e6e6'}
        s={isHovered ? '0 0 16px 0 rgba(0, 0, 0, 0.12)' : undefined}
        transition="box-shadow 3ms, border-bottom-color 100ms"
      >
        <Flex
          onClick={this.onClick}
          wrap="nowrap"
          justify="space-between"
          align="center"
          css={{cursor: 'pointer', userSelect: 'none'}}
          px={8}
          pt={4}
          pb={isOpened ? 2 : 4}
        >
          {title}
          {isOpened ? (
            <FlexItem shrink={0} width={6} height={6}>
              {openedIcon}
            </FlexItem>
          ) : (
            <FlexItem shrink={0} width={6} height={6}>
              {closedIcon}
            </FlexItem>
          )}
        </Flex>
        {isOpened ? (
          <Box px={8} pb={4}>
            {content}
          </Box>
        ) : null}
      </Card>
    )
  }

}
