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
  SimpleTransition,
  SimpleTransitionProps,
  Icon,
  Flex,
  FlexItem,
  IconProps,
  Input,
  Spinner,
  Box,
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
  onHide?: () => void
  onBack?: () => void
  onShow?: () => void
}

const CardPos = Card.withComponent(Pos)
const PosFlexCard = styled(Card.withComponent(Pos))().withComponent(Flex)

const InputModalOverlay: FunctionComponent<InputModalProps> = (props) => (
  <Overlay
    show={props.show}
    onHide={props.onHide}
    rootClose={true}
    transition={contentTransition}
    children={() => (
      <Box>
        <Pos
          type="absolute"
          zIndex={10050}
          top={0}
          bottom={0}
          left={0}
          right={0}
          height={20}
        >
          <Card
            width={1}
            bg="#fff"
            bb={props.error ? 'solid 2px #d0021b' : 'none'}
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
                    type={props.inputType}
                    value={props.value}
                    valueWeight={300}
                    width={1}
                    autoFocus={true}
                    valueSize={5}
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
          </Card>
        </Pos>
        <CardPos
          ref={props.contentRef}
          zIndex={10050}
          s="0 0 16px 0 rgba(0, 0, 0, 0.12)"
          overflow="auto"
          type="absolute"
          top={20}
          width={1}
          bg="#fff"
        >
          <Box width={295} mx="auto">{props.children}</Box>
        </CardPos>
      </Box>
    )}
  />
)

export default InputModalOverlay
