import React, {FunctionComponent, ReactNode, RefObject} from 'react'
import {css} from 'emotion'

import {Card, Overlay, Pos, SimpleTransition, SimpleTransitionProps} from '@qiwi/pijma-core'

export interface DropDownProps {
  show: boolean
  target?: Overlay.OverlayProps['target']
  contentRef?: RefObject<HTMLDivElement>
  container: Overlay.OverlayProps['container']
  children: ReactNode
  onHide: () => void
  offset?: number
  zIndex?: number
}

const transition: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

transition.defaultProps = {
  appear: true,
  timeout: {
    enter: 370,
    exit: 250,
  },
  enterClassName: (timeout: number) => css({
    opacity: 1,
    transition: `opacity ${timeout}ms ease`,
  }),
  exitClassName: (timeout: number) => css({
    opacity: 0,
    transition: `opacity ${timeout}ms ease`,
  }),
}

export const DropDown: FunctionComponent<DropDownProps> = (props) => (
  <Overlay
    show={props.show}
    placement="bottom"
    target={props.target}
    container={props.container}
    rootClose={true}
    onHide={props.onHide}
    transition={transition}
    children={() => (
      <Pos type="absolute" top={props.offset} zIndex={props.zIndex} width={1}>
        <Card
          ref={props.contentRef}
          s="0 28px 52px 0 rgba(0, 0, 0, 0.16)"
          bg="#fff"
          r={10}
          px={6}
          py={3}
          width={1}
          maxHeight={104}
          boxSizing="content-box"
          overflow="auto"
          ml={-6}
          css={{
            '&::-webkit-scrollbar': {
              cursor: 'pointer',
              width: 24,
              background: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: 24,
              backgroundClip: 'padding-box',
              border: '8px solid transparent',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            },
            '&::-webkit-scrollbar-button:single-button': {
              pointerEvents: 'none',
              display: 'block',
              height: 4,
              width: 4,
            },
          }}
        >
          {props.children}
        </Card>
      </Pos>
    )}
  />
)

DropDown.defaultProps = {
  offset: 0,
}
