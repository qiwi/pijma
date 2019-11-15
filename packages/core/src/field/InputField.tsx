import React, {FunctionComponent, ReactNode} from 'react'

import {Pos, Flex, FlexItem} from '../primitive'
import {Text} from '@qiwi/pijma-desktop/typography'

export interface FieldProps {
  title?: ReactNode
  active: boolean
  padded?: boolean
  input: ReactNode
  hint?: ReactNode
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
}

export const InputField: FunctionComponent<FieldProps> = ({title, active, padded, input, hint, error, action, help}) => (
  <Pos type="relative" width={1}>
    <Pos type="relative" height={4}>
      <Pos type="absolute" top={active ? 0 : 4} left={0} maxWidth={1} transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)" pr={padded ? 7 : 0}>
        <Text
          display="block"
          size={active ? 's' : 'l'}
          bold={false}
          color="support"
          transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
          children={title}
        />
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
        <Text
          display="block"
          size="s"
          compact={true}
          bold={false}
          color="failure"
          children={error}
        />
      ) : help ? (
        <Text
          display="block"
          size="s"
          compact={true}
          bold={false}
          color="support"
          children={help}
        />
      ) : (
        null
      )}
      {action ? (
        <FlexItem pl={6} ml="auto">
          <Text
            display="block"
            size="s"
            bold={false}
            compact={true}
            children={action}
          />
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
  </Pos>
)
