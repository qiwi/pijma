import {
  Box,
  Card,
  css,
  Icon,
  Modal,
  Pos,
  SimpleTransition,
  SimpleTransitionProps,
} from '@qiwi/pijma-core'
import React, { FunctionComponent, ReactNode } from 'react'

const ContentTransition: FunctionComponent<SimpleTransitionProps> = (props) => (
  <SimpleTransition {...props} />
)

ContentTransition.displayName = 'ContentTransition'

ContentTransition.defaultProps = {
  timeout: {
    enter: 370,
    exit: 250,
  },
  enterClassName: (timeout: number) =>
    css({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
    }),
  exitClassName: (timeout: number) =>
    css({
      opacity: 0,
      transform: 'translate3d(0, 35px, 0)',
      transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
    }),
}

const BackdropTransition: FunctionComponent<SimpleTransitionProps> = (
  props,
) => <SimpleTransition {...props} />

BackdropTransition.displayName = 'BackdropTransition'

BackdropTransition.defaultProps = {
  timeout: {
    enter: 370,
    exit: 250,
  },
  enterClassName: (timeout: number) =>
    css({
      opacity: 1,
      transition: `opacity ${timeout}ms ease`,
    }),
  exitClassName: (timeout: number) =>
    css({
      opacity: 0,
      transition: `opacity ${timeout}ms ease`,
    }),
}

interface SimpleModalProps {
  show: boolean
  closable?: boolean
  escapeClose?: boolean
  backdropClose?: boolean
  size: 's' | 'm' | 'l'
  stub?: boolean
  onShow?: () => void
  onHide?: () => void
  children?: ReactNode
}

const ModalWidth: { [size in NonNullable<SimpleModalProps['size']>]: number } =
  {
    s: 95,
    m: 145,
    l: 170,
  }

export const SimpleModal: FunctionComponent<SimpleModalProps> = (props) =>
  props.stub ? (
    <Box display="none">{props.children}</Box>
  ) : (
    <Modal
      show={props.show}
      keyboard={props.escapeClose}
      onShow={props.onShow}
      onHide={props.onHide}
      transition={ContentTransition}
      backdropTransition={BackdropTransition}
      renderBackdrop={(backdropProps) => (
        <Pos
          type="fixed"
          zIndex={9999}
          top={0}
          right={0}
          bottom={0}
          left={0}
          {...backdropProps}
        >
          <Card bg="rgba(255, 255, 255, 0.96)" width={1} height={1} />
        </Pos>
      )}
      renderDialog={(dialogProps) => (
        <Pos
          type="fixed"
          zIndex={9999}
          top={0}
          bottom={0}
          left={0}
          right={0}
          height="100%"
          overflow="auto"
          css={{
            textAlign: 'center',
            '&:before': {
              content: '""',
              display: 'inline-block',
              height: '100%',
              verticalAlign: 'middle',
            },
          }}
          {...dialogProps}
        >
          <Pos
            type="relative"
            display="inline-block"
            p={12}
            css={{ verticalAlign: 'middle', textAlign: 'left' }}
          >
            <Card
              role="document"
              s="0 20px 64px 8px rgba(0, 0, 0, 0.16)"
              r={10}
              bg="#fff"
              pt={11}
              pb={12}
              px={11}
              width={ModalWidth[props.size]}
            >
              {props.closable && props.onHide ? (
                <Pos
                  aria-label="close"
                  type="absolute"
                  top={16}
                  right={16}
                  width={6}
                  height={6}
                  cursor="pointer"
                  onClick={props.onHide}
                  children={<Icon name="cross" color="#000" />}
                />
              ) : null}
              {props.children}
            </Card>
          </Pos>
        </Pos>
      )}
    />
  )

SimpleModal.displayName = 'SimpleModal'
