import React, {FunctionComponent, ReactNode} from 'react'

import {Typo, Pos, Flex, FlexItem} from '@qiwi/pijma-core'

export interface FieldProps {
  title?: ReactNode
  active: boolean
  padded: boolean
  input: ReactNode
  hint?: ReactNode
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
}

const Label = Typo.withComponent('label')

export const InputField: FunctionComponent<FieldProps> = ({title, active, padded, input, hint, error, action, help}) => (
  <Pos type="relative" width={1}>
    <Pos type="relative" height={4}>
      <Pos type="absolute" top={active ? 0 : 4} left={0} maxWidth={1} transition="fast" pr={padded ? 7 : 0}>
        <Label display="block" nowrap size={active ? 3.5 : 5} height={active ? 4 : 7} color="support" transition="fast" children={title}/>
      </Pos>
    </Pos>
    <Pos type="relative">
      <Flex align="center">
        {input}
        <Pos type="absolute" zIndex={1} right={0} width={6} height={6} children={hint}/>
      </Flex>
    </Pos>
    <Flex justify="flex-start" minHeight={4} mt={1}>
      {error ? (
        <Typo display="block" color="failure" size={3.5} height={4} children={error}/>
      ) : help ? (
        <Typo display="block" color="support" size={3.5} height={4} children={help}/>
      ) : (
        null
      )}
      {action ? (
        <FlexItem pl={6} ml="auto">
          <Typo display="block" nowrap size={3.5} height={4} children={action}/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
  </Pos>
)
