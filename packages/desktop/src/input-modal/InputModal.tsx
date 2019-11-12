import React, {
  FunctionComponent,
  ChangeEventHandler,
  KeyboardEventHandler,
  RefObject,
  FocusEventHandler,
  MouseEventHandler,
} from 'react'
import {css} from 'emotion'

import {
  styled,
  Pos,
  Card,
  SimpleTransition,
  SimpleTransitionProps,
  Icon,
  Flex,
  FlexItem,
  IconProps,
  Input,
  Spinner,
  Box,
  OverlayProps,
} from '@qiwi/pijma-core'
import {Overlay} from 'react-overlays'

const contentTransition: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

contentTransition.defaultProps = {
  timeout: {
    enter: 150,
    exit: 150,
  },
  enterClassName: (timeout: number) => css({
    opacity: 1,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitClassName: (timeout: number) => css({
    opacity: 0,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

interface InputModalProps {
  value: string
  show: boolean
  tabIndex?: number
  inputType?: string
  autoComplete?: boolean
  inputRef?: RefObject<HTMLInputElement>
  contentRef?: RefObject<HTMLDivElement>
  placeholder?: string
  error?: boolean
  loading?: boolean
  submitIcon?: IconProps['name']
  target: OverlayProps['target']
  container: OverlayProps['container']
  onChange?: ChangeEventHandler
  onKeyDown?: KeyboardEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onBack?: MouseEventHandler
  onSubmit?: MouseEventHandler
  onHide?: () => void
}

const PosFlexCard = styled(Card.withComponent(Pos))().withComponent(Flex)

export const InputModal: FunctionComponent<InputModalProps> = ({placeholder = 'Текстовое поле', ...props}) => (
  <Overlay
    target={props.target}
    container={props.container}
    show={props.show}
    rootClose={true}
    transition={contentTransition}
    onHide={props.onHide}
    children={() => (
      <Pos type="absolute" top={0} zIndex={10050} width={1}>
        <Card
          height={20}
          bg="#fff"
          bb={props.error ? 'solid 2px #d0021b' : 'none'}
          s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
        >
          <Box width={295} mx="auto">
            <PosFlexCard
              type="relative"
              align="center"
              width={295}
              mx="auto"
              height={20}
              py={4}
              px={6}
            >
              {props.onBack ? (
                <FlexItem cursor="pointer" shrink={0} mr={4} onClick={props.onBack}>
                  <Icon name="arrow-left" color="#000"/>
                </FlexItem>
              ) : (
                null
              )}
              <FlexItem grow={1}>
                <Input
                  ref={props.inputRef}
                  tabIndex={props.tabIndex}
                  type={props.inputType}
                  autoComplete={props.autoComplete ? 'on' : 'off'}
                  value={props.value}
                  valueWeight={300}
                  width={1}
                  autoFocus
                  valueSize={5}
                  placeholder={placeholder}
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
                    <Box cursor="pointer" width={6} height={6}>
                      <Icon name={props.submitIcon} color="#666"/>
                    </Box>
                  )}
                </FlexItem>
              ) : (
                null
              )}
            </PosFlexCard>
          </Box>
        </Card>
        <Card
          ref={props.contentRef}
          overflow="auto"
          maxHeight={84}
          s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
          bg="#fff"
        >
          <Box width={295} mx="auto" children={props.children}/>
        </Card>
      </Pos>
    )}
  />
)
