import React, {FunctionComponent, Fragment} from 'react'
import {css} from 'emotion'

import {
  styled,
  Modal,
  ModalProps,
  SimpleTransition,
  SimpleTransitionProps,
  Pos,
  Card,
  FlexItem,
} from '@qiwi/pijma-core'

const contentTransition: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>
const contentTransitionHorizontal: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

const translate3d = {
  vertical: '0, 100%, 0',
  horizontal: '100%, 0, 0',
}

const defaultProps = (direction: 'vertical' | 'horizontal') => ({
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
    transform: `translate3d(${translate3d[direction]})`,
    transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
  }),
})

contentTransition.defaultProps = defaultProps('vertical')
contentTransitionHorizontal.defaultProps = defaultProps('horizontal')

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

interface DropUpProps {
  show: boolean
  onShow?: () => void
  onHide: () => void
  horizontal?: boolean
}

const DropUp: FunctionComponent<DropUpProps> = (props) => (
  <StyledModal
    show={props.show}
    onShow={props.onShow}
    onHide={props.onHide}
    renderBackdrop={({onClick}) => (
      <Pos type="fixed" zIndex="auto" top={0} right={0} bottom={0} left={0}>
        <Card bg="rgba(245, 245, 245, 0.7)" width={1} height={1} onClick={onClick}/>
      </Pos>
    )}
    transition={props.horizontal ? contentTransitionHorizontal : contentTransition}
    backdropTransition={backdropTransition}
    children={(
      <FlexItem align="flex-end" overflow="auto" width="100%" maxHeight="100%" css={{boxShadow: '0px 0px 50px 0px rgba(0, 0, 0, 0.16)'}}>
        <Card bg="#fff" width={1} height={1} p="24px">
          <Fragment>
            {props.children}
          </Fragment>
        </Card>
      </FlexItem>
    )}
  />
)

export default DropUp
