import React, {FC} from 'react'

import {
  Overlay,
  OverlayProps,
  SimpleTransition,
  SimpleTransitionProps,
  css,
  Pos,
  Value,
  Box,
} from '@qiwi/pijma-core'

export interface DropDownProps {
  show: boolean
  offset?: number
  width?: Value
  minWidth?: Value
  maxWidth?: Value
  rootClose?: boolean
  stub?: boolean
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

export const DropDown: FC<DropDownProps> = ({
  show,
  offset,
  width,
  minWidth,
  maxWidth,
  rootClose = true,
  stub = false,
  target,
  container,
  onHide,
  children,
}) => (
  stub ? (
    <Box display="none">
      {children}
    </Box>
  ) : (
    <Overlay
      show={show}
      placement="bottom"
      target={target}
      container={container}
      rootClose={rootClose}
      onHide={onHide}
      transition={transition}
      children={(renderProps) => (
        <Pos
          type="absolute"
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
          zIndex={999}
          ref={renderProps.props.ref}
          mt={offset}
          css={renderProps.props.style}
        >
          {children}
        </Pos>
      )}
    />
  )
)

DropDown.defaultProps = {
  rootClose: true,
  stub: false,
}
