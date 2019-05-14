import React, {ReactNode} from 'react'

import {Flex, Box, FlexItem, Card, Value} from '../primitive'

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
  px: Value
  py: Value
  titlePb: Value
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
      px,
      py,
      titlePb,
    } = this.props
    return (
      <Card
        onMouseEnter={this.onMouseEnter}
        bb={
          isHovered || isNextHovered
            ? '1px solid transparent'
            : '1px solid #e6e6e6'
        }
        s={isHovered ? '0 0 16px 0 rgba(0, 0, 0, 0.12)' : undefined}
        transition="box-shadow 3ms, border-bottom-color 100ms"
      >
        <Flex
          onClick={this.onClick}
          wrap="nowrap"
          justify="space-between"
          align="start"
          css={{cursor: 'pointer', userSelect: 'none'}}
          px={px}
          pt={py}
          pb={isOpened ? titlePb : py}
        >
          {title}
          <FlexItem shrink={0} width={6} height={6} ml={3}>
            {isOpened ? openedIcon : closedIcon}
          </FlexItem>
        </Flex>
        {isOpened ? (
          <Box px={px} pb={py}>
            {content}
          </Box>
        ) : null}
      </Card>
    )
  }

}
