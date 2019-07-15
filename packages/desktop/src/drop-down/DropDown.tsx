import React, {FunctionComponent} from 'react'
import {css} from 'emotion'

import {Overlay, OverlayProps, Card, Pos, SimpleTransition, SimpleTransitionProps} from '@qiwi/pijma-core'

export interface DropDownProps {
  show: boolean
  target: OverlayProps['target']
  container: OverlayProps['container']
  children: React.ReactElement
  onHide: () => void
  offset?: number
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

export const DropDown: FunctionComponent<DropDownProps> = (props) => {
  console.log(props)
  return (
    <Overlay
      show={props.show}
      placement="bottom"
      target={props.target}
      container={props.container}
      rootClose={false}
      onHide={props.onHide}
      transition={transition}
      children={() => (
        <Pos type="absolute" top={props.offset}>
          <Card s="0 28px 52px 0 rgba(0, 0, 0, 0.16)" bg="#fff" r={10} pt={3} pb={3}>
            {props.children}
          </Card>
        </Pos>
      )}
    />
  )
}

DropDown.defaultProps = {
  offset: 0,
}
