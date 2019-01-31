import React, {FunctionComponent, ReactNode} from 'react'
import {css} from 'emotion'

import {
  Modal,
  ModalProps,
  SimpleTransition,
  SimpleTransitionProps,
  Box,
  Pos,
  Card,
  Flex,
  FlexItem,
  CardProps,
  FlexProps,
  styled,
  PosProps,
  } from '@qiwi/pijma-core'

import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography/Text'

const contentTransitionVertical: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>
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

contentTransitionVertical.defaultProps = defaultProps('vertical')
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
  zIndex: 9999,
})

export interface DropUpProps {
  show: boolean
  onShow?: () => void
  onHide: () => void
  onBack?: () => void
  horizontal?: boolean
  title: string
  footer?: ReactNode
}

// todo fix types issue
const FlexPosCard = styled(Flex.withComponent(Pos).withComponent(Card))<PosProps & CardProps & FlexProps>()

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
    transition={props.horizontal ? contentTransitionHorizontal : contentTransitionVertical}
    backdropTransition={backdropTransition}
    children={
      <FlexPosCard direction="column" align="stretch" width={1} maxHeight="calc(100% - 44px)" bg="#fff" type="absolute" bottom={0}>
        <Card width={1} px={6} py={4} bb="1px solid #d8d8d8">
          <Flex width={1} align="center">
            {props.onBack ? (
              <Box width="24px" height="24px" mr={3} onClick={props.onBack}>
                <Icon name="arrow-left"/>
              </Box>
            ) : (
              null
            )}
            <Text size="m">{props.title}</Text>
            <Box width="24px" height="24px" ml="auto" onClick={props.onHide}>
              <Icon name="cross"/>
            </Box>
          </Flex>
        </Card>
        <FlexItem grow={1} css={{display: 'flex', align: 'stretch'}}>
          <FlexItem grow={1} overflow="auto">
            {props.children}
          </FlexItem>
        </FlexItem>
        {props.footer ? (
          <Box p={4}>
            {props.footer}
          </Box>
        ) : (
          null
        )}
      </FlexPosCard>
    }
  />
)

export {DropUp}
