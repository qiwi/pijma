import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex, Card, Pos} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface StepperProps {
  children: ReactNode[]
}

const CardFlex = Card.withComponent(Flex)

export const Stepper: FunctionComponent<StepperProps> = props => (
  <Box as="ol">
    {props.children.map((item, index) => (
      <Pos
        key={index}
        mt={index > 0 ? 4 : undefined}
        display="flex"
        type="relative"
        as="li"
      >
        <CardFlex
          mr={5}
          height={10}
          width={10}
          minWidth={10}
          display="flex"
          bg="#F5F5F5"
          r="50%"
          align="center"
          justify="center"
        >
          <Paragraph size="l" bold>
            {index + 1}
          </Paragraph>
        </CardFlex>
        {index + 1 === props.children.length ? null : (
          <Pos
            type="absolute"
            width="3px"
            top="52px"
            bottom="-4px"
            left="18.5px"
            css={{backgroundColor: '#F5F5F5'}}
          />
        )}
        <Box mt={2}>
          {typeof item === 'string' ? (
            <Paragraph size="m">{item}</Paragraph>
          ) : (
            item
          )}
        </Box>
      </Pos>
    ))}
  </Box>
)
