import React, {
  FunctionComponent,
  ChangeEventHandler,
  KeyboardEventHandler,
  RefObject,
  FocusEventHandler,
} from 'react'
import {css} from 'emotion'

import {
  styled,
  Pos,
  Card,
  Modal,
  ModalProps,
  SimpleTransition,
  SimpleTransitionProps,
  Icon,
  Flex,
  FlexItem,
  IconProps,
  Input,
  Spinner, Box,
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

interface InputModalProps {
  value: string
  show: boolean
  inputType?: string
  inputRef?: RefObject<HTMLInputElement>
  contentRef?: RefObject<HTMLDivElement>
  error?: boolean
  loading?: boolean
  submitIcon?: IconProps['name']
  onChange?: ChangeEventHandler
  onKeyDown?: KeyboardEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onSubmit?: () => void
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

const CardPos = Card.withComponent(Pos)
const PosFlexCard = styled(Card.withComponent(Pos))().withComponent(Flex)

const InputModal: FunctionComponent<InputModalProps> = (props) => (
  <StyledModal
    show={props.show}
    onShow={props.onShow}
    onHide={props.onHide}
    transition={contentTransition}
    restoreFocus={false}
    children={(
      <Card
        width={1}
        bg="#fff"
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        bb={props.error ? 'solid 2px #d0021b' : 'solid 2px transparent'}
        s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
      >
        <Box
          width={295}
          mx="auto"
        >
          <PosFlexCard
            type="relative"
            align="center"
            height={20}
            py={4}
          >
            {props.onBack ? (
              <FlexItem shrink={0} mr={4} onClick={props.onBack}>
                <Icon name="arrow-left" color="#000"/>
              </FlexItem>
            ) : (
              null
            )}
            <FlexItem grow={1}>
              <Input
                value={props.value}
                type={props.inputType}
                ref={props.inputRef}
                width={1}
                autoFocus={true}
                placeholder="Текстовое поле"
                placeholderSize={5}
                placeholderWeight={300}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                onKeyDown={props.onKeyDown}
                onChange={props.onChange}
              />
            </FlexItem>
            {props.submitIcon ? (
              <FlexItem shrink={0} ml={4} onClick={props.onSubmit}>
                {props.loading ? (
                  <Spinner color="#ff8c00" width={6} height={6}/>
                ) : (
                  <Icon name={props.submitIcon} color="#666"/>
                )}
              </FlexItem>
            ) : (
              null
            )}
          </PosFlexCard>
        </Box>
        <CardPos
          ref={props.contentRef}
          s="0 0 16px 0 rgba(0, 0, 0, 0.12)"
          overflow="auto"
          type="relative"
          width={1}
          bg="#fff"
          children={props.children}
        />
      </Card>
    )}
  />
)

export default InputModal
