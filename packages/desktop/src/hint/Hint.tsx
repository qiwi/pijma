import React, {FC, ReactNode} from 'react'
import {css} from 'emotion'

import {
  Pos,
  Box,
  QuestionIcon,
  Card,
  Spacer,
  HintControl,
  Overlay,
  SimpleTransitionProps,
  SimpleTransition,
  QuestionArrow,
} from '@qiwi/pijma-core'

import {Heading, Text} from '../typography'

export interface HintProps {
  size: 'small' | 'strong'
  show: boolean
  content: ReactNode
  placement: 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end'
  width?: number
  title?: ReactNode
  flip?: boolean
  onShow: () => void
  onHide: () => void
}

const TransformArrow: Record<NonNullable<HintProps['placement']>, string> = {
  'top-start': `rotate(${-90}deg)`,
  'top': `rotate(${-90}deg)`,
  'top-end': `rotate(${-90}deg)`,
  'right-start': `rotate(${0}deg)`,
  'right': `rotate(${0}deg)`,
  'right-end': `rotate(${0}deg)`,
  'bottom-start': `rotate(${90}deg)`,
  'bottom': `rotate(${90}deg)`,
  'bottom-end': `rotate(${90}deg)`,
  'left-start': `rotate(${180}deg)`,
  'left': `rotate(${180}deg)`,
  'left-end': `rotate(${180}deg)`,
}

const IndentItem: Record<NonNullable<HintProps['placement']>, string> = {
  'top-start': '0 0 24px 0',
  'top': '0 0 24px 0',
  'top-end': '0 0 24px 0',
  'right-start': '0 0 0 24px',
  'right': '0 0 0 24px',
  'right-end': '0 0 0 24px',
  'bottom-start': '24px 0 0 0',
  'bottom': '24px 0 0 0',
  'bottom-end': '24px 0 0 0',
  'left-start': '0 24px 0 0',
  'left': '0 24px 0 0',
  'left-end': '0 24px 0 0',
}

const IndentItemWithExtendedPlacement: Record<NonNullable<HintProps['placement']>, string> = {
  'top-start': '0 0 0 -56px',
  'top': '0 0 0 0',
  'top-end': '0 -56px 0 0',
  'right-start': '-56px 0 0 0',
  'right': '0 0 0 0',
  'right-end': '0 0 -56px 0',
  'bottom-start': '0 0 0 -56px',
  'bottom': '0 0 0 0',
  'bottom-end': '0 -56px 0 0',
  'left-start': '-56px 0 0 0',
  'left': '0 0 0 0',
  'left-end': '0 0 -56px 0',
}

const ArrowSizeWidth: Record<NonNullable<HintProps['placement']>, number> = {
  'top-start': 11,
  'top': 11,
  'top-end': 11,
  'right-start': 2.75,
  'right': 2.75,
  'right-end': 2.75,
  'bottom-start': 11,
  'bottom': 11,
  'bottom-end': 11,
  'left-start': 2.75,
  'left': 2.75,
  'left-end': 2.75,
}

const ArrowSizeHeight: Record<NonNullable<HintProps['placement']>, number> = {
  'top-start': 11,
  'top': 11,
  'top-end': 11,
  'right-start': 11,
  'right': 11,
  'right-end': 11,
  'bottom-start': 2.75,
  'bottom': 2.75,
  'bottom-end': 2.75,
  'left-start': 11,
  'left': 11,
  'left-end': 11,
}

const transitionBottom: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

transitionBottom.defaultProps = {
  timeout: {
    enter: 150,
    exit: 150,
  },
  enteringClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateY(${-12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  enteredClassName: (timeout: number) => css({
    opacity: 1,
    transform: `translateY(${0}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitingClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateY(${-12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitedClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateY(${-12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

const transitionTop: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

transitionTop.defaultProps = {
  timeout: {
    enter: 150,
    exit: 150,
  },
  enteringClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateY(${12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  enteredClassName: (timeout: number) => css({
    opacity: 1,
    transform: `translateY(${0}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitingClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateY(${12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitedClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateY(${12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

const transitionRight: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

transitionRight.defaultProps = {
  timeout: {
    enter: 150,
    exit: 150,
  },
  enteringClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateX(${-12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  enteredClassName: (timeout: number) => css({
    opacity: 1,
    transform: `translateX(${0}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitingClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateX(${-12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitedClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateX(${-12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

const transitionLeft: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

transitionLeft.defaultProps = {
  timeout: {
    enter: 150,
    exit: 150,
  },
  enteringClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateX(${12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  enteredClassName: (timeout: number) => css({
    opacity: 1,
    transform: `translateX(${0}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitingClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateX(${12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitedClassName: (timeout: number) => css({
    opacity: 0,
    transform: `translateX(${12}px)`,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

export const Hint: FC<HintProps> = ({
  placement,
  size,
  width,
  title,
  content,
  show,
  flip,
  onShow,
  onHide,
}) => (
  <HintControl
    show={show}
    onShow={onShow}
    children={(renderProps) => (
      <Pos type="relative" ref={renderProps.container}>
        <Box cursor="pointer" onClick={renderProps.onClick} ref={renderProps.target} width={6} height={6}>
          <QuestionIcon/>
        </Box>
        <Overlay
          show={renderProps.show}
          flip={flip}
          // @ts-ignore
          placement={placement}
          target={renderProps.target.current!}
          container={renderProps.container.current}
          rootClose={true}
          onHide={onHide}
          popperConfig={{modifiers: {computeStyle: {gpuAcceleration: false}}}}
          transition={placement ? (
            placement.includes('top') ? (
              transitionTop
            ) : (
              placement.includes('bottom') ? (
                transitionBottom
              ) : (
                placement.includes('left') ? (
                  transitionLeft
                ) : (
                  placement.includes('right') ? (
                    transitionRight
                  ) : (
                    undefined
                  )
                )
              )
            )
          ) : (
            undefined
          )}
          children={(overlayRenderProps) => (
            <Pos
              zIndex={999}
              ref={overlayRenderProps.props.ref}
              css={overlayRenderProps.props.style}
              m={IndentItem[overlayRenderProps.placement]}
            >
              <Card
                bg="#fff"
                s="0 8px 16px 0 rgba(0, 0, 0, 0.12)"
                r={10}
                p={size === 'small' ? 4 : 8}
                width={size === 'small' ? undefined : width}
                css={size === 'small' ? {whiteSpace: 'nowrap'} : undefined}
                m={size === 'small' ? undefined : IndentItemWithExtendedPlacement[overlayRenderProps.placement]}
              >
                <Spacer size="xs">
                  {title ? (
                    <Heading size="4" children={title}/>
                  ) : (
                    null
                  )}
                  <Text
                    size={size === 'small' ? 'm' : 's'}
                    display="block"
                    bold={false}
                    children={content}
                  />
                </Spacer>
              </Card>
              <Pos
                type="absolute"
                ref={overlayRenderProps.arrowProps.ref}
                style={overlayRenderProps.arrowProps.style}
                width={ArrowSizeWidth[overlayRenderProps.placement]}
                height={ArrowSizeHeight[overlayRenderProps.placement]}
                top={overlayRenderProps.placement.includes('bottom') ? 0 : undefined}
                bottom={overlayRenderProps.placement.includes('top') ? 0 : undefined}
                left={overlayRenderProps.placement.includes('left') ? undefined : 0}
                right={overlayRenderProps.placement.includes('left') ? 0 : undefined}
                mt={overlayRenderProps.placement.includes('bottom') ? -7 : undefined}
                mb={overlayRenderProps.placement.includes('top') ? -7 : undefined}
                ml={overlayRenderProps.placement.includes('right') ? -7 : undefined}
                mr={overlayRenderProps.placement.includes('left') ? 1.25 : undefined}
              >
                <QuestionArrow transform={TransformArrow[overlayRenderProps.placement]}/>
              </Pos>
            </Pos>
          )}
        />
      </Pos>
    )}
  />
)

Hint.defaultProps = {
  flip: true,
}
