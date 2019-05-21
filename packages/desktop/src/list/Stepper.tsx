import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex, FlexItem, Card} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface StepperProps {
  children: ReactNode[]
}

export const Stepper: FunctionComponent<StepperProps> = props => (
  <Box as="ol">
    {props.children.map((item, index) => (
      <Flex key={index} mt={index > 0 ? 4 : undefined} as="li">
        <FlexItem mr={4} height="auto" width={10} shrink={0}>
          <Card display="flex" bg="#F5F5F5" r="50%" height={10} width={10}>
            <Box m="auto">
              <Paragraph size="m" bold>
                {index + 1}
              </Paragraph>
            </Box>
          </Card>
          {index + 1 === props.children.length ? null : (
            <Box width="4px" height="calc(100% - 40px)" mx="auto" mt={2}>
              <Card bg="#F5F5F5" width={1} height={1} />
            </Box>
          )}
        </FlexItem>
        <Box mt={2}>
          {typeof item === 'string' ? (
            <Paragraph size="m">{item}</Paragraph>
          ) : (
            item
          )}
        </Box>
      </Flex>
    ))}
  </Box>
)
