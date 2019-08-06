import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Card, Box, Breaker, Typo} from '@qiwi/pijma-core'
import {Button} from '@qiwi/pijma-desktop'
import {Heading} from '../typography/'

export interface StatusProps {
  icon?: ReactNode,
  title?: ReactNode,
  textButton?: string
}

export const Status: FC<StatusProps> = ({icon, title, textButton, children}) => (
  <Card pb={4} pt={4} r={10} bg="white">
    <Flex align="center" direction="column">
      {icon ? (
        <FlexItem
          width={11}
          mb={6}
          children={icon}
        />
      ) : (
        null
      )
      }
      {title ? (
        <Box mb={!children ? 6 : 2}>
          <Heading
            size="4"
            children={title}
          />
        </Box>
      ) : (
        null
      )}
      {children ? (
        <Box mb={textButton ? 4 : 0}>
          <Typo as="p" display="block" size={4} weight={300}>
            <Breaker
              children={children}
            />
          </Typo>
        </Box>
      ) : (
        null
      )}
      {textButton ? (
        <Box>
          <Button
            type="submit"
            kind="simple"
            size="normal"
            text={textButton}
          />
        </Box>
      ) : (
        null
      )}
    </Flex>
  </Card>
)
