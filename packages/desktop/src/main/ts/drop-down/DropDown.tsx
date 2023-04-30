import React, { FC, ReactElement } from 'react'

import {
  Box,
  css,
  getDataProps,
  Overlay,
  OverlayProps,
  Pos,
  SimpleTransition,
  Value,
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
  children: ReactElement
  onHide: () => void
}

const Transition: OverlayProps['transition'] = (props) => (
  <SimpleTransition
    {...props}
    timeout={{
      enter: 300,
      exit: 200,
    }}
    enterClassName={(timeout: number) =>
      css({
        opacity: 1,
        transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
      })
    }
    exitClassName={(timeout: number) =>
      css({
        opacity: 0,
        transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
      })
    }
  />
)

Transition.displayName = 'Transition'

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
  ...rest
}) =>
  stub ? (
    <Box display="none">{children}</Box>
  ) : (
    <Overlay
      show={show}
      placement="bottom"
      target={target}
      container={container}
      rootClose={rootClose}
      onHide={onHide}
      transition={Transition}
      popperConfig={{
        modifiers: [
          {
            name: 'preventOverflow',
            enabled: false,
          },
        ],
      }}
      children={(renderProps) => (
        <Pos
          {...getDataProps(rest)}
          role="listbox"
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

DropDown.displayName = 'DropDown'

DropDown.defaultProps = {
  rootClose: true,
  stub: false,
}
