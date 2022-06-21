import {
  Box,
  Card,
  css,
  FlexCard,
  FlexItem,
  Modal,
  OffsetScrollControl,
  Pos,
  SimpleTransition,
  SimpleTransitionProps,
} from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

interface HeaderMenuProps {
  show: boolean
  zIndex?: number
  header?: ReactNode
  from: 'top' | 'right' | 'bottom' | 'left'
  stub?: boolean
  onShow?: () => void
  onHide?: () => void
}

const containerClassName = css({
  position: 'fixed',
})

const translate3d: { [direction in HeaderMenuProps['from']]: string } = {
  top: '0, -100%, 0',
  right: '100%, 0, 0',
  bottom: '0, 100%, 0',
  left: '-100%, 0, 0',
}

const defaultProps = (direction: HeaderMenuProps['from']) => ({
  timeout: {
    enter: 300,
    exit: 100,
  },
  enterClassName: (timeout: number) =>
    css({
      transform: 'translate3d(0, 0, 0)',
      transition: `transform ${
        timeout - 1
      }ms cubic-bezier(0.4, 0.0, 0.2, 1) 1ms`,
    }),
  exitClassName: (timeout: number) =>
    css({
      transform: `translate3d(${translate3d[direction]})`,
      transition: `transform ${
        timeout - 1
      }ms cubic-bezier(0.4, 0.0, 0.2, 1) 1ms`,
    }),
})

const contentTransitionTop: FC<SimpleTransitionProps> = (props) => (
  <SimpleTransition {...props} />
)
const contentTransitionRight: FC<SimpleTransitionProps> = (props) => (
  <SimpleTransition {...props} />
)
const contentTransitionBottom: FC<SimpleTransitionProps> = (props) => (
  <SimpleTransition {...props} />
)
const contentTransitionLeft: FC<SimpleTransitionProps> = (props) => (
  <SimpleTransition {...props} />
)

contentTransitionTop.defaultProps = defaultProps('top')
contentTransitionRight.defaultProps = defaultProps('right')
contentTransitionBottom.defaultProps = defaultProps('bottom')
contentTransitionLeft.defaultProps = defaultProps('left')

const contentTransition: {
  [direction in HeaderMenuProps['from']]: FC<SimpleTransitionProps>
} = {
  top: contentTransitionTop,
  right: contentTransitionRight,
  bottom: contentTransitionBottom,
  left: contentTransitionLeft,
}

export const HeaderMenu: FC<HeaderMenuProps> = ({
  show,
  zIndex = 9999,
  header,
  from,
  stub,
  onShow,
  onHide,
  children,
}) =>
  stub ? (
    <Box display="none">
      <FlexCard
        display="flex"
        direction="column"
        bg="#fff"
        width={1}
        height={1}
        s="0 8px 16px 0 rgba(0, 0, 0, 0.12)"
      >
        <FlexItem height={15} shrink={1}>
          <Card
            height={1}
            s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            children={header}
          />
        </FlexItem>
        <FlexItem grow={1} height={1} minHeight={0}>
          {children}
        </FlexItem>
      </FlexCard>
    </Box>
  ) : (
    <Modal
      autoFocus
      show={show}
      onShow={onShow}
      onHide={onHide}
      containerClassName={containerClassName}
      transition={contentTransition[from]}
      renderDialog={(dialogProps) => (
        <Pos
          type="fixed"
          zIndex={zIndex}
          top={0}
          bottom={0}
          left={0}
          right={0}
          {...dialogProps}
        >
          <OffsetScrollControl
            content={children}
            top="8px"
            children={(renderProps) => (
              <FlexCard
                display="flex"
                direction="column"
                bg="#fff"
                width={1}
                height={1}
                s="0 8px 16px 0 rgba(0, 0, 0, 0.12)"
              >
                <FlexItem height={15} shrink={1}>
                  <Card
                    height={1}
                    s={
                      renderProps.top
                        ? '0 1px 2px 0 rgba(0, 0, 0, 0.12)'
                        : undefined
                    }
                    transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                    children={header}
                  />
                </FlexItem>
                <FlexItem grow={1} height={1} minHeight={0}>
                  {renderProps.children}
                </FlexItem>
              </FlexCard>
            )}
          />
        </Pos>
      )}
    />
  )
