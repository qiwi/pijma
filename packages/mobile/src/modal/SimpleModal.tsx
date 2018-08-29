import React, {SFC, Fragment} from 'react'

import {Modal} from 'react-overlays'
import {css} from 'emotion'
import {rgba} from 'polished'

import {
  styled,
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
    transform: 'translate3d(0, -100%, 0)',
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

interface ModalProps {
  show: boolean
  closable?: boolean
  escapeClose?: boolean
  backdropClose?: boolean
  onShow?: () => void
  onHide?: () => void
}

const StyledModal = styled(Modal)<Modal['props']>({
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  overflow: 'auto',
})

const StyledModalContent = styled.div((props) => ({
  position: 'relative',
  outline: 'none',
  backgroundColor: props.theme.color.white,
  padding: 24,
  width: '100%',
  height: '100%',
  overflow: 'auto',
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
  backgroundColor: rgba(props.theme.color.white, 0.96),
}))

const SimpleModal: SFC<ModalProps> = (props) => (
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

export default SimpleModal
