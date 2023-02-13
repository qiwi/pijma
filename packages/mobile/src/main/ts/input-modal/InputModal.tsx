import React, {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from 'react'

import {
  BoxPos,
  Card,
  CardPos,
  css,
  Flex,
  FlexItem,
  Icon,
  Input,
  Modal,
  ModalProps,
  Pos,
  SimpleTransition,
  styled,
} from '@qiwi/pijma-core'

const ContentTransition: ModalProps['transition'] = (props) => (
  <SimpleTransition
    {...props}
    timeout={{
      enter: 370,
      exit: 250,
    }}
    enterClassName={(timeout: number) =>
      css({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
      })
    }
    exitClassName={(timeout: number) =>
      css({
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)',
        transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
      })
    }
  />
)

ContentTransition.displayName = 'ContentTransition'

interface InputModalProps {
  value: string
  tabIndex?: number
  autoComplete?: boolean
  placeholder?: string
  maxLength?: number
  show: boolean
  inputRef?: RefObject<HTMLInputElement>
  contentRef?: RefObject<HTMLDivElement>
  error?: boolean
  onChange?: ChangeEventHandler
  onKeyDown?: KeyboardEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onBack?: MouseEventHandler
  onSubmit?: MouseEventHandler
  onShow?: () => void
  onHide?: () => void
  onEscape?: () => void
  children?: ReactNode
}

const PosFlexCard = styled(CardPos)().withComponent(Flex)

PosFlexCard.displayName = 'PosFlexCard'

export const InputModal: FC<InputModalProps> = (props) => (
  <Modal
    show={props.show}
    onShow={props.onShow}
    onHide={props.onHide}
    onEscapeKeyDown={props.onEscape}
    transition={ContentTransition}
    restoreFocus={false}
    renderDialog={(dialogProps) => (
      <Pos
        type="fixed"
        zIndex={10_050}
        top={0}
        bottom={0}
        left={0}
        right={0}
        height="100%"
        overflow="auto"
        {...dialogProps}
      >
        <Card role="document" width={1} height={1} bg="#fff">
          <PosFlexCard
            type="relative"
            align="center"
            height={15}
            p={4}
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            bb={props.error ? 'solid 2px #d0021b' : 'solid 2px transparent'}
            s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
          >
            {props.onBack ? (
              <FlexItem
                aria-label="back"
                shrink={0}
                mr={4}
                onClick={props.onBack}
              >
                <Icon name="arrow-left" color="#000" />
              </FlexItem>
            ) : null}
            <FlexItem grow={1}>
              <Input
                value={props.value}
                type="search"
                ref={props.inputRef}
                width={1}
                autoFocus={true}
                tabIndex={props.tabIndex}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                autoComplete={props.autoComplete ? 'on' : 'off'}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                onKeyDown={props.onKeyDown}
                onChange={props.onChange}
              />
            </FlexItem>
            {props.onSubmit ? (
              <FlexItem shrink={0} ml={4} onClick={props.onSubmit}>
                <Icon name="search" color="#666" />
              </FlexItem>
            ) : null}
          </PosFlexCard>
          <BoxPos
            overflow="auto"
            type="relative"
            py={3}
            height="calc(100% - 60px)"
            children={props.children}
          />
        </Card>
      </Pos>
    )}
  />
)

InputModal.displayName = 'InputModal'
