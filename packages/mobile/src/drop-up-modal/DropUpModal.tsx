import React, {SFC, Fragment} from 'react'

import {css} from 'emotion'
import {rgba} from 'polished'

import {
  styled,
  Modal,
  ModalProps,
  SimpleTransition,
  SimpleTransitionProps,
} from '@qiwi/pijma-core'

import {
  CrossIcon,
} from '@qiwi/pijma-media'

const contentTransition: SFC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

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
    transform: 'translate3d(0, 100%, 0)',
    transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
  }),
}

const backdropTransition: SFC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

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
  escapeClose?: boolean
  backdropClose?: boolean
  onShow?: () => void
  onHide?: () => void
}

const StyledModal = styled(Modal)<ModalProps>({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  paddingTop: 44,
  zIndex: 9999,
})

const StyledModalContent = styled.div((props) => ({
  alignSelf: 'flex-end',
  width: '100%',
  maxHeight: '100%',
  padding: 24,
  backgroundColor: props.theme.color.white,
  boxShadow: `0px 0px 50px 0 ${rgba(0, 0, 0, 0.16)}`,
  overflow: 'auto',
  outline: 'none',
}))

const StyledModalClose = styled.div((props) => ({
  position: 'absolute',
  top: 24,
  right: 24,
  width: 24,
  height: 24,
  cursor: 'pointer',
  fill: props.theme.color.black,
}))

const StyledModalBackdrop = styled.div((props) => ({
  position: 'fixed',
  zIndex: 'auto',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: rgba(props.theme.color.gray.lightest, 0.7),
}))

const DropUpModal: SFC<SimpleModalProps> = (props) => (
  <StyledModal
    show={props.show}
    keyboard={props.escapeClose}
    onShow={props.onShow}
    onHide={props.onHide}
    renderBackdrop={({onClick}) => <StyledModalBackdrop onClick={props.backdropClose ? onClick : undefined}/>}
    transition={contentTransition}
    backdropTransition={backdropTransition}
    children={(
      <StyledModalContent>
        <Fragment>
          {props.closable && props.onHide ? (
            <StyledModalClose onClick={() => props.onHide && props.onHide()}>
              <CrossIcon/>
            </StyledModalClose>
          ) : (
            null
          )}
          {props.children}
        </Fragment>
      </StyledModalContent>
    )}
  />
)

export default DropUpModal
