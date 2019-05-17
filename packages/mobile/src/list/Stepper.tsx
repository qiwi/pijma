import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex, Card, Pos} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface StepperProps<I> {
  items: I[]
}

const FlexOl = Flex.withComponent('ol')
const PosLi = Pos.withComponent('li')
const CardFlex = Card.withComponent(Flex)

export const Stepper: FunctionComponent<StepperProps<ReactNode>> = props => (
  <FlexOl>
    {props.items.map((item, index) => (
      <PosLi
        key={index}
        mb={index + 1 === props.items.length ? undefined : 3}
        display="flex"
        type="relative"
      >
        <CardFlex
          mr={3}
          height={7}
          width={7}
          minWidth={7}
          display="flex"
          bg="#F5F5F5"
          r="50%"
          align="center"
          justify="center"
        >
          <Paragraph size="m" bold>
            {index + 1}
          </Paragraph>
        </CardFlex>
        {index + 1 === props.items.length ? null : (
          <Pos
            type="absolute"
            width="2px"
            top="36px"
            bottom="-4px"
            left="13px"
            css={{backgroundColor: '#F5F5F5'}}
          />
        )}
        <Box mt="4px">
          {typeof item === 'string' ? (
            <Paragraph size="s">{item}</Paragraph>
          ) : (
            item
          )}
        </Box>
      </PosLi>
    ))}
  </FlexOl>
)
