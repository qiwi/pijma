import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Card, Box} from '@qiwi/pijma-core'
import {Heading} from '../typography/'
import {Paragraph} from '@qiwi/pijma-desktop/typography'

export interface StatusProps {
  icon?: ReactNode,
  title?: string
}

export const Status: FC<StatusProps> = ({icon, title, children}) => (
  <Card>
    <Flex align="center" direction="column">
      {icon ? (
        <FlexItem
          width={12}
          height={12}
          mb={6}
          children={icon}
        />
      ) : (
        null
      )}
      {title ? (
        <Heading
          size="4"
          children={title}
        />
      ) : (
        null
      )}
      {children ? (
        <Box mt={2}>
          {typeof children === 'string' ? (
            <Paragraph size="m">{children}</Paragraph>
          ) : (
            children
          )}
        </Box>
      ) : (
        null
      )}
    </Flex>
  </Card>
)
