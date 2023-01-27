import React, { FC, ReactNode } from 'react'

import { getDataProps } from '../dataProps'
import { Box, Flex, FlexItem, Pos, Typo } from '../primitive'

export interface SimpleFieldProps {
  input: ReactNode
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
}

export const SimpleField: FC<SimpleFieldProps> = ({
  input,
  error,
  action,
  help,
  ...rest
}) => (
  <Pos {...getDataProps(rest)} type="relative" width={1}>
    <Box width={1}>{input}</Box>
    <Flex justify="flex-start" minHeight={4} mt={1}>
      {error ? (
        <Typo
          display="block"
          color="#d0021b"
          weight={300}
          size={3.5}
          height={4}
          children={error}
        />
      ) : help ? (
        <Typo
          display="block"
          color="#666"
          weight={300}
          size={3.5}
          height={4}
          children={help}
        />
      ) : null}
      {action ? (
        <FlexItem pl={6} ml="auto">
          <Typo
            display="block"
            nowrap={true}
            weight={300}
            size={3.5}
            height={4}
            children={action}
          />
        </FlexItem>
      ) : null}
    </Flex>
  </Pos>
)

SimpleField.displayName = 'SimpleField'
