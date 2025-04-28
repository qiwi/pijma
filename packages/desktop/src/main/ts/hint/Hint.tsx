import {
  Box,
  BoxProps,
  Card,
  css,
  getDataProps,
  HintArrow,
  HintControl,
  Overlay,
  OverlayProps,
  Pos,
  PosProps,
  QuestionIcon,
  SimpleTransition,
} from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

import { Paragraph } from '../typography'

export interface HintProps {
  show: boolean
  children: ReactNode
  placement: NonNullable<OverlayProps['placement']>
  flip?: boolean
  onShow: () => void
  onHide: () => void
}

const Transition: OverlayProps['transition'] = (props) => (
  <SimpleTransition
    {...props}
    {...{
      timeout: {
        enter: 150,
        exit: 150,
      },
      enteringClassName: (timeout: number) =>
        css({
          opacity: 0,
          transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
        }),
      enteredClassName: (timeout: number) =>
        css({
          opacity: 1,
          transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
        }),
      exitingClassName: (timeout: number) =>
        css({
          opacity: 0,
          transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
        }),
      exitedClassName: (timeout: number) =>
        css({
          opacity: 0,
          transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1), transform ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
        }),
    }}
  />
)

const LargeProps: Record<HintProps['placement'], BoxProps & PosProps> = {
  'top-start': {
    mb: 6,
    ml: -9,
  },
  top: {
    mb: 6,
  },
  'top-end': {
    mb: 6,
    mr: -9,
  },
  'right-start': {
    mt: -9,
    ml: 6,
  },
  right: {
    ml: 6,
  },
  'right-end': {
    mb: -9,
    ml: 6,
  },
  'bottom-start': {
    mt: 6,
    ml: -9,
  },
  bottom: {
    mt: 6,
  },
  'bottom-end': {
    mt: 6,
    mr: -9,
  },
  'left-start': {
    mt: -9,
    mr: 6,
  },
  left: {
    mr: 6,
  },
  'left-end': {
    mb: -9,
    mr: 6,
  },
  auto: {},
  'auto-start': {},
  'auto-end': {},
}

const SmallProps: Record<HintProps['placement'], BoxProps & PosProps> = {
  'top-start': {
    mb: 6,
    ml: -3.5,
  },
  top: {
    mb: 6,
  },
  'top-end': {
    mb: 6,
    mr: -3.5,
  },
  'right-start': {
    mt: -3.5,
    ml: 6,
  },
  right: {
    ml: 6,
  },
  'right-end': {
    mb: -3.5,
    ml: 6,
  },
  'bottom-start': {
    mt: 6,
    ml: -3.5,
  },
  bottom: {
    mt: 6,
  },
  'bottom-end': {
    mt: 6,
    mr: -3.5,
  },
  'left-start': {
    mt: -3.5,
    mr: 6,
  },
  left: {
    mr: 6,
  },
  'left-end': {
    mb: -3.5,
    mr: 6,
  },
  auto: {},
  'auto-start': {},
  'auto-end': {},
}

const ArrowProps: Record<HintProps['placement'], BoxProps & PosProps> = {
  'top-start': {
    bottom: 0,
    mb: -7,
  },
  top: {
    bottom: 0,
    mb: -7,
  },
  'top-end': {
    bottom: 0,
    mb: -7,
  },
  'right-start': {
    left: 0,
    ml: -7,
  },
  right: {
    left: 0,
    ml: -7,
  },
  'right-end': {
    left: 0,
    ml: -7,
  },
  'bottom-start': {
    top: 0,
    mt: -7,
  },
  bottom: {
    top: 0,
    mt: -7,
  },
  'bottom-end': {
    top: 0,
    mt: -7,
  },
  'left-start': {
    right: 0,
    mr: -7,
  },
  left: {
    right: 0,
    mr: -7,
  },
  'left-end': {
    right: 0,
    mr: -7,
  },
  auto: {},
  'auto-start': {},
  'auto-end': {},
}

export const Hint: FC<HintProps> = ({
  placement,
  children,
  show,
  flip = true,
  onShow,
  onHide,
  ...rest
}) => {
  const small = typeof children === 'string'
  return (
    <HintControl
      show={show}
      onShow={onShow}
      children={(renderProps) => (
        <Pos
          {...getDataProps(rest)}
          type="relative"
          ref={renderProps.container}
        >
          <Box
            cursor="pointer"
            onClick={renderProps.onClick}
            ref={renderProps.target}
            width={6}
            height={6}
          >
            <QuestionIcon />
          </Box>
          <Overlay
            show={renderProps.show}
            flip={flip}
            placement={placement}
            target={() => renderProps.target.current!}
            container={() => renderProps.container.current}
            rootClose={true}
            onHide={onHide}
            transition={Transition}
            popperConfig={{
              modifiers: [
                {
                  name: 'arrow',
                  options: {
                    padding: small ? 4 : 26,
                  },
                },
                {
                  name: 'preventOverflow',
                  enabled: false,
                },
              ],
            }}
            children={(overlayRenderProps) => (
              <Pos
                role="tooltip"
                zIndex={999}
                ref={overlayRenderProps.props.ref}
                css={overlayRenderProps.props.style}
                {...(small ? SmallProps : LargeProps)[
                  overlayRenderProps.placement
                ]}
              >
                <Card
                  bg="#fff"
                  s="0 8px 16px 0 rgba(0, 0, 0, 0.12)"
                  r={10}
                  p={small ? 4 : 8}
                  css={small ? { whiteSpace: 'nowrap' } : undefined}
                >
                  {small ? (
                    <Paragraph size="s" children={children} />
                  ) : (
                    children
                  )}
                </Card>
                <Pos
                  type="absolute"
                  ref={overlayRenderProps.arrowProps.ref}
                  style={overlayRenderProps.arrowProps.style}
                  width={11}
                  height={11}
                  {...ArrowProps[overlayRenderProps.placement]}
                >
                  <HintArrow placement={overlayRenderProps.placement} />
                </Pos>
              </Pos>
            )}
          />
        </Pos>
      )}
    />
  )
}
