import React, {FunctionComponent} from 'react'
import {css} from 'emotion'

import {
  styled,
  Pos,
  Card,
  Box,
  Modal,
  ModalProps,
  SimpleTransition,
  SimpleTransitionProps,
  Icon,
  Flex,
  FlexItem,
  IconProps,
  Input,
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

interface InputModalProps {
  value: string
  show: boolean
  escapeClose?: boolean
  backdropClose?: boolean
  submitIcon?: IconProps['name']
  onSubmit?: () => void
  onChange?: (value: string) => void
  onShow?: () => void
  onHide?: () => void
  onBack?: () => void
}

const StyledModal = styled(Modal)<ModalProps>({
  position: 'fixed',
  zIndex: 10050,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  overflow: 'auto',
})

const InputModal: FunctionComponent<InputModalProps> = (props) => (
  <StyledModal
    show={props.show}
    keyboard={props.escapeClose}
    onShow={props.onShow}
    onHide={props.onHide}
    transition={contentTransition}
    backdropTransition={backdropTransition}
    renderBackdrop={({onClick}) => (
      <Pos type="fixed" zIndex="auto" top={0} right={0} bottom={0} left={0}>
        <Card bg="rgba(255, 255, 255, 0.96)" width={1} height={1} onClick={props.backdropClose ? onClick : undefined}/>
      </Pos>
    )}
    children={(
      <Pos type="relative" width={1} height={1}>
        <Card bg="#fff" width={1} height={1} overflow="auto">
          <Card s="0 0 25px 0 rgba(0, 0, 0, 0.08)">
            <Flex height={15} p={4} align="center">
              {props.onBack ? (
                <FlexItem shrink={0} mr={4}>
                  <Icon name="arrow-left" color="#000"/>
                </FlexItem>
              ) : (
                null
              )}
              <FlexItem grow={1} >
                <Input value={props.value}/>
              </FlexItem>
              {props.submitIcon && props.onSubmit ? (
                <FlexItem shrink={0} ml={4}>
                  <Icon name={props.submitIcon}/>
                </FlexItem>
              ) : (
                null
              )}
            </Flex>
          </Card>
          <Box p={4}>
            {props.children}
          </Box>
        </Card>
      </Pos>
    )}
  />
)

export default InputModal
