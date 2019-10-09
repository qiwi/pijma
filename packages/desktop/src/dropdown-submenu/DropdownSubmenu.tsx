import React, {FC} from 'react'

import {
  SimpleTransition,
  SimpleTransitionProps,
  Card,
  Flex,
  FlexItem,
  Pos,
  OverlayProps,
  Icon,
  Overlay,
  css,
} from '@qiwi/pijma-core'

export interface DropdownSubmenuProps {
  show: boolean
  target: OverlayProps['target']
  container: OverlayProps['container']
  children: React.ReactElement
  onHide: () => void
}

const transition: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

transition.defaultProps = {
  timeout: {
    enter: 120,
    exit: 120,
  },
  enterClassName: (timeout: number) => css({
    transform: 'translateY(0)',
    opacity: 1,
    transition: `all ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitClassName: (timeout: number) => css({
    transform: 'translateY(-100%)',
    opacity: 0,
    transition: `all ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

export const DropdownSubmenu: FC<DropdownSubmenuProps> = ({
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
    children={(renderProps) => (
      <Pos type="absolute" zIndex={999} ref={renderProps.props.ref} width={1} css={renderProps.props.style}>
        <Pos type="relative">
          <Card
            bg="#fff"
            bt="1px solid #d8d8d8"
            s="0 15px 40px 0 rgba(0,0,0,0.15)"
            width={1}
            pt={8}
            px={12}
            pb={12}
          >
            <Flex justify="center" width={1}>
              <FlexItem width={295}>
                {children}
              </FlexItem>
            </Flex>
          </Card>
          <Pos
            mb="auto"
            type="absolute"
            width={6}
            height={6}
            top={7}
            right={7}
            cursor="pointer"
          >
            <Icon name="cross" color="#666"/>
          </Pos>
        </Pos>
      </Pos>
    )}
  />
)
