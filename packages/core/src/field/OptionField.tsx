import React, {ReactNode, FocusEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react'

import {styled, Typo, Box, Flex, FlexItem, Spacer} from '@qiwi/pijma-core'

export interface OptionFieldProps {
  title?: ReactNode
  hint?: ReactNode
  help?: ReactNode
  tabIndex?: number
  autoFocus?: boolean
  onFocus: FocusEventHandler
  onBlur: FocusEventHandler
  onKeyDown: KeyboardEventHandler
  onMouseLeave: MouseEventHandler
}

const Label = Typo.withComponent('label')

const Input = styled(Box, {
  shouldForwardProp: (prop) => !['autoFocus'].includes(prop),
})<Partial<OptionFieldProps>>()

export const OptionField: React.FunctionComponent<OptionFieldProps> = (props) => (
  <Box>
    <Spacer size="s">
      {props.title ? (
        <Flex justify="flex-start" width={1}>
          <Label display="block" size={4} height={6} weight={700} children={props.title}/>
          {props.hint ? <FlexItem shrink={0} width={6} height={6} ml={1} children={props.hint}/> : null}
        </Flex>
      ) : (
        null
      )}
      <Input
        tabIndex={props.tabIndex}
        autoFocus={props.autoFocus}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        onMouseLeave={props.onMouseLeave}
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
