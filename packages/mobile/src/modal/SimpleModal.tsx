import React, {FunctionComponent, Fragment} from 'react'
import {css} from 'emotion'

import {
  styled,
  Value,
  Pos,
  Card,
  Modal,
  ModalProps,
  SimpleTransition,
  SimpleTransitionProps,
  Icon,
} from '@qiwi/pijma-core'

const contentTransition: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

contentTransition.defaultProps = {
  timeout: {
    enter: 370,
    exit: 250,
  },
  enterClassName: (timeout: number) => css({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
  }),
  exitClassName: (timeout: number) => css({
    opacity: 0,
    transform: 'translate3d(0, -100%, 0)',
    transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
  }),
}

const backdropTransition: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

backdropTransition.defaultProps = {
  timeout: {
    enter: 370,
    exit: 250,
  },
  enterClassName: (timeout: number) => css({
    opacity: 1,
    transition: `opacity ${timeout}ms ease`,
  }),
  exitClassName: (timeout: number) => css({
    opacity: 0,
    transition: `opacity ${timeout}ms ease`,
  }),
}

interface SimpleModalProps {
  show: boolean
  closable?: boolean
  zIndex?: number
  p?: Value
  escapeClose?: boolean
  backdropClose?: boolean
  restoreFocus?: boolean
  onShow?: () => void
  onHide?: () => void
}

interface StyledModalProps extends ModalProps {
  zIndex?: number
  p?: Value
}

const StyledModalNonProps = ['zIndex', 'position', 'top', 'bottom', 'left', 'right', 'height', 'overflow']

const StyledModal = styled(Modal, {
  shouldForwardProp: (prop) => !StyledModalNonProps.includes(prop),
})<StyledModalProps>(({zIndex = 9999}) => ({
  zIndex,
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  overflow: 'auto',
}))

const SimpleModal: FunctionComponent<SimpleModalProps> = ({p = 6, ...props}) => (
  <StyledModal
    show={props.show}
    zIndex={props.zIndex}
    keyboard={props.escapeClose}
    onShow={props.onShow}
    onHide={props.onHide}
    restoreFocus={props.restoreFocus}
    transition={contentTransition}
    backdropTransition={backdropTransition}
    renderBackdrop={({onClick}) => (
      <Pos type="fixed" zIndex="auto" top={0} right={0} bottom={0} left={0}>
        <Card bg="rgba(255, 255, 255, 0.96)" width={1} height={1} onClick={props.backdropClose ? onClick : undefined}/>
      </Pos>
    )}
    children={(
      <Pos type="relative" width={1} height={1}>
        <Card bg="#fff" p={p} width={1} height={1} overflow="auto">
          <Fragment>
            {props.closable && props.onHide ? (
              <Pos
                type="absolute"
                top={p}
                right={p}
                width={6}
                height={6}
                cursor="pointer"
                onClick={() => props.onHide && props.onHide()}
                children={<Icon name="cross" color="#000"/>}
              />
            ) : (
              null
            )}
            {props.children}
          </Fragment>
        </Card>
      </Pos>
    )}
  />
)

SimpleModal.defaultProps = {
  p: 6,
  zIndex: 9999,
}

export default SimpleModal
