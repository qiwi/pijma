import React, {FC, ReactNode} from 'react'
import {Block, Box, Flex, FlexItem, Icon, Spacer, Stub} from '@qiwi/pijma-core'
import {Paragraph} from '@qiwi/pijma-mobile'
import {CollapseControl} from '@qiwi/pijma-core/collapse'

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

  return (
    <Block>
      <CollapseControl
        children={renderProps => (
          <Box
            p={6}
            cursor="pointer"
            opacity={!renderProps.expanded && faded ? 0.3 : 1}
            css={{'&: active': {opacity: 1, transition: 'opacity .3s'}}}
            onClick={renderProps.onClick}
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
                css={renderProps.expanded ? {
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
                clamp={!renderProps.expanded && renderProps.transitionEnded || stub ? 1 : undefined}
              />
              <Box
                overflow="hidden"
                maxHeight={renderProps.expanded ? '100vh' : 0}
                transition="max-height 0.3s ease-in-out"
                onTransitionEnd={renderProps.onTransitionEnd}
              >
                {content}
              </Box>
            </Spacer>
          </Box>
        )}
      />
    </Block>
  )
}
