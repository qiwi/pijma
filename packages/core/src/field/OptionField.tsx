import React, {FocusEventHandler, KeyboardEventHandler, ReactNode} from 'react'

import styled from '../styled'
import {Box, BoxProps, Flex, FlexItem, Typo} from '../primitive'
import {Spacer} from '../spacer'

export interface OptionFieldProps {
  title?: ReactNode
  hint?: ReactNode
  help?: ReactNode
  role?: string
  tabIndex?: number
  autoFocus?: boolean
  onFocus: FocusEventHandler
  onBlur: FocusEventHandler
  onKeyDown: KeyboardEventHandler
}

const Input = styled(Box, {
  shouldForwardProp: (prop) => !['autoFocus'].includes(prop),
})<BoxProps & Pick<OptionFieldProps, 'autoFocus'>>()

export const OptionField: React.FunctionComponent<OptionFieldProps> = (props) => (
  <Box>
    <Spacer size="s">
      {props.title ? (
        <Flex justify="flex-start" width={1}>
          <Typo as="label" display="block" size={4} height={6} weight={700} children={props.title}/>
          {props.hint ? <FlexItem shrink={0} width={6} height={6} ml={1} children={props.hint}/> : null}
        </Flex>
      ) : (
        null
      )}
      <Input
        tabIndex={props.tabIndex}
        autoFocus={props.autoFocus}
        role={props.role}
        aria-label={typeof props.title === 'string' ? props.title : undefined}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        children={<Spacer size="s" children={props.children}/>}
      />
      {props.help ? (
        <Typo display="block" weight={300} size={3.5} height={4} children={props.help}/>
      ) : (
        null
      )}
    </Spacer>
  </Box>
)
