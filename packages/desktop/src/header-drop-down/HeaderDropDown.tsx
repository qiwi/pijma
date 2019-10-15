import React, {FC} from 'react'

import {
  SimpleTransition,
  SimpleTransitionProps,
  Card,
  Pos,
  OverlayProps,
  Icon,
  Overlay,
  css,
} from '@qiwi/pijma-core'

export interface HeaderDropDownProps {
  show: boolean
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

export const HeaderDropDown: FC<HeaderDropDownProps> = ({
  show,
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
    popperConfig={{
      modifiers: {
        preventOverflow: {
          enabled: false,
        },
        hide: {
          enabled: false,
        },
      },
    }}
    children={(renderProps) => (
      <Pos
        type="absolute"
        zIndex={600}
        ref={renderProps.props.ref}
        width={1}
        css={renderProps.props.style}
      >
        <Pos type="relative">
          <Card
            bg="#fff"
            width={1}
            pt={12}
            pb={12}
            s="0 0 16px 0 rgba(0, 0, 0, 0.12)"
          >
            {children}
          </Card>
          <Pos
            mb="auto"
            type="absolute"
            width={6}
            height={6}
            top={6}
            right={6}
            cursor="pointer"
            onClick={onHide}
          >
            <Icon name="cross" color="#666"/>
          </Pos>
        </Pos>
      </Pos>
    )}
  />
)
