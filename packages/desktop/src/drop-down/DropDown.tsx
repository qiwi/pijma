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
          children={props.children}
        />
      </Pos>
    )}
  />
)

DropDown.defaultProps = {
  offset: 0,
}
