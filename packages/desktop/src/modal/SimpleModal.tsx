import React, {SFC, Fragment} from 'react'
import {css} from 'emotion'

import {
  styled,
  Pos,
  Card,
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
    transform: 'translate3d(0, 35px, 0)',
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
  compact?: boolean
  onShow?: () => void
  onHide?: () => void
}

const StyledModal = styled(Modal)<ModalProps>({
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  textAlign: 'center',
  overflow: 'auto',
  '&:before': {
    content: '""',
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle',
  },
})

const SimpleModal: SFC<SimpleModalProps> = (props) => (
  <StyledModal
    show={props.show}
    keyboard={props.escapeClose}
    onShow={props.onShow}
    onHide={props.onHide}
    transition={contentTransition}
    backdropTransition={backdropTransition}
    renderBackdrop={({onClick}) => (
      <Pos type="fixed" zIndex="auto" top={0} right={0} bottom={0} left={0}>
        <Card bg="backdrop" width={1} height={1} onClick={props.backdropClose ? onClick : undefined}/>
      </Pos>
    )}
    children={(
      <Pos type="relative" display="inline-block" p={12} css={{verticalAlign: 'middle', textAlign: 'left'}}>
        <Card shadow="z4" r={10} bg="content" pt={11} pb={12} px={11} width={props.compact ? 95 : 145}>
          <Fragment>
            {props.closable && props.onHide ? (
              <Pos
                type="absolute"
                top={16}
                right={16}
                width={6}
                height={6}
                cursor="pointer"
                onClick={() => props.onHide && props.onHide()}
                css={{fill: '#000'}}
                children={<CrossIcon/>}
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

export default SimpleModal
