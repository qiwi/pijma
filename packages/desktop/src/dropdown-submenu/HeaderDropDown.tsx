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

export interface HeaderDropDownProps {
  show: boolean
  target: OverlayProps['target']
  container: OverlayProps['container']
  animate?: boolean
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
  animate = false,
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
    transition={animate ? transition : undefined}
    popperConfig={{modifiers: {preventOverflow: {enabled: false}}}}
    children={(renderProps) => (
      <Pos type="absolute" zIndex={999} ref={renderProps.props.ref} width={1} css={renderProps.props.style}>
        <Pos type="relative">
          <Card
            bg="#fff"
            bt="1px solid #d8d8d8"
            s="0 15px 40px 0 rgba(0,0,0,0.15)"
            width={1}
            pt={12}
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
            onClick={onHide}
          >
            <Icon name="cross" color="#666"/>
          </Pos>
        </Pos>
      </Pos>
    )}
  />
)
