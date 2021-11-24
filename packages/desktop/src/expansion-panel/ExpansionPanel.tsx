import React, {FC, ReactNode} from 'react'
import {Block, Box, Flex, FlexItem, Icon, Spacer, Stub} from '@qiwi/pijma-core'
import {Paragraph} from '@qiwi/pijma-desktop'

export interface ExpansionPanelProps {
  title: string
  additionalTitle: string
  summary: string
  content: ReactNode
  stub?: boolean
  faded?: boolean
}

export const ExpansionPanel: FC<ExpansionPanelProps> = (
  {
    title,
    additionalTitle,
    summary,
    content,
    stub,
    faded,
  }) => {
  const [isTransitionEnded, setIsTransitionEnded] = React.useState(true)
  const [expanded, setExpanded] = React.useState(false)

  const handleClick = () => {
    setIsTransitionEnded(false)
    if (!stub) {
      setExpanded(!expanded)
    }
  }

  const handleTransitionEnd = () => {
    setIsTransitionEnded(true)
  }

  return (
    <Block>
      <Box
        p={6}
        cursor="pointer"
        opacity={faded ? 0.3 : 1}
        css={{'&:hover': {opacity: 1, transition: 'opacity .3s'}}}
        onClick={handleClick}
      >
        <Flex justify="space-between">
          <FlexItem minWidth={0.3}>
            <Paragraph
              size="s"
              stub={stub}
              clamp={stub ? 1 : undefined}
              bold
              color="support"
              children={additionalTitle}
            />
          </FlexItem>
          <FlexItem
            ml={2}
            css={expanded ? {
              transform: 'rotate(-180deg)',
              transition: 'transform .3s ease-in-out',
            } : undefined}
          >
            {stub ? (
              <Stub width={10} height={10} r={20}/>
            ) : (
              <Icon name="angle-down"/>
            )}
          </FlexItem>
        </Flex>
        <Spacer size="xxs">
          <Box width={stub ? 0.3 : undefined}>
            <Paragraph
              size="l"
              bold
              stub={stub}
              clamp={stub ? 1 : undefined}
              children={title}
            />
          </Box>
          <Paragraph
            stub={stub}
            children={summary}
            clamp={!expanded && isTransitionEnded || stub ? 1 : undefined}
          />
          <Box
            overflow="hidden"
            maxHeight={expanded ? '100vh' : 0}
            transition="max-height 0.3s ease-in-out"
            onTransitionEnd={handleTransitionEnd}
          >
            {content}
          </Box>
        </Spacer>
      </Box>
    </Block>
  )
}
