import React, {FunctionComponent, ReactNode} from 'react'

import {Typo, Pos, Flex, FlexItem, Box, Card} from '../primitive'
import {Stub} from '../stub'

export interface FieldProps {
  title?: ReactNode
  active: boolean
  padded?: boolean
  input: ReactNode
  hint?: ReactNode
  icon?: ReactNode
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  stub?: boolean
}

export const InputField: FunctionComponent<FieldProps> = ({
  title,
  active,
  padded,
  input,
  hint,
  error,
  action,
  help,
  icon,
  stub = false,
}) => (
  stub ? (
    <Box>
      {title ? (
        <Stub width={15} height={2} top={1} bottom={1}/>
      ) : (
        <Box height={4}/>
      )}
      <Card bb="1px solid rgba(0, 0, 0, 0.2)" height={7}>
        <Flex align="center" justify="space-between" height={1}>
          {icon ? (
            <FlexItem shrink={1} mr={3}>
              <Stub width={6} height={4} top={1} bottom={1} r={0}/>
            </FlexItem>
          ) : (
            null
          )}
          <FlexItem
            maxWidth={38}
            width={1}
            mt={1}
            mb={1}
          >
            <Stub width={1} height={3}/>
          </FlexItem>
          {hint ? (
            <FlexItem ml={2}>
              <Stub width={5} height={5} r={10}/>
            </FlexItem>
          ) : (
            null
          )}
        </Flex>
      </Card>
      {help || error ? (
        <Stub width={15} height={2} top={2} bottom={1}/>
      ) : (
        null
      )}
    </Box>
  ) : (
    <Pos type="relative" width={1}>
      <Pos type="relative" height={4}>
        <Pos type="absolute" top={active ? 0 : 4} left={!active && icon ? 7 : 0} maxWidth={1} transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)" pr={padded ? 7 : 0}>
          <Typo as="label" display="block" nowrap={true} weight={300} size={active ? 3.5 : 5} height={active ? 4 : 7} color="#666" transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)" children={title}/>
        </Pos>
      </Pos>
      <Pos type="relative">
        <Flex align="center">
          {input}
          <Pos type="absolute" zIndex={1} right={0} width={6} height={6} children={hint}/>
          <Pos type="absolute" zIndex={1} left={0} width={6} height={6} children={icon}/>
        </Flex>
      </Pos>
      <Flex justify="flex-start" minHeight={4} mt={1}>
        {error ? (
          <Typo display="block" color="#d0021b" weight={300} size={3.5} height={4} children={error}/>
        ) : help ? (
          <Typo display="block" color="#666" weight={300} size={3.5} height={4} children={help}/>
        ) : (
          null
        )}
        {action ? (
          <FlexItem pl={6} ml="auto">
            <Typo display="block" nowrap={true} weight={300} size={3.5} height={4} children={action}/>
          </FlexItem>
        ) : (
          null
        )}
      </Flex>
    </Pos>
  )
)
