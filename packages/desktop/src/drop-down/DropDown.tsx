import React, {FC} from 'react'

import {Overlay, OverlayProps, SimpleTransition, SimpleTransitionProps, styled, css, cssValue} from '@qiwi/pijma-core'

export interface DropDownProps {
  show: boolean
  offset?: number
  target: OverlayProps['target']
  container: OverlayProps['container']
  children: React.ReactElement
  onHide: () => void
}

const transition: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

transition.defaultProps = {
  timeout: {
    enter: 300,
    exit: 200,
  },
  enterClassName: (timeout: number) => css({
    opacity: 1,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitClassName: (timeout: number) => css({
    opacity: 0,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

interface OverlayPosProps {
  offset?: number
  positionTop?: number
  positionLeft?: number
  arrowOffsetTop?: number
  arrowOffsetLeft?: number
}

const OverlayPosNonProps = [
  'style', 'placement', 'offset',
  'positionTop', 'positionLeft',
  'arrowOffsetTop', 'arrowOffsetLeft',
]

const OverlayPos = styled('div', {
  shouldForwardProp: (prop) => !OverlayPosNonProps.includes(prop),
})<OverlayPosProps>(({
  theme,
  offset,
  positionTop,
  positionLeft,
}) => ({
  display: 'inline-table',
  position: 'absolute',
  width: '100%',
  zIndex: 999,
  top: positionTop,
  left: positionLeft,
  marginTop: cssValue((offset), theme.scale, false),
}))

export const DropDown: FC<DropDownProps> = ({
  show,
  offset,
  target,
  container,
  onHide,
  children,
}) => (
  <Overlay
    show={show}
    placement="bottom"
    target={target}
    container={container}
    rootClose={true}
    onHide={onHide}
    transition={transition}
    children={(
      <OverlayPos offset={offset}>
        {children}
      </OverlayPos>
    )}
  />
)
