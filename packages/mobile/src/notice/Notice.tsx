import React, {FC, ReactNode} from 'react'
import {Box, Flex, FlexItem, Spacer, Stub} from '@qiwi/pijma-core'
import {Heading, Paragraph, Text} from '../typography/'

export interface NoticeProps {
  icon: ReactNode
  title?: ReactNode
  stub?: boolean
}

export const Notice: FC<NoticeProps> = ({icon, title, children, stub = false}) => (
  stub ? (
    <Flex>
      <FlexItem mr={title ? 4 : 2}>
        <Stub
          height={6}
          width={6}
          r={12}
        />
      </FlexItem>
      <FlexItem align="center">
        <Spacer size="xs">
          {title ? (
            <Box>
              <Heading size="3" stub/>
            </Box>
          ) : (
            null
          )}
          <Box maxWidth={33} width={1}>
            <Text display="block" size="s" stub/>
          </Box>
        </Spacer>
      </FlexItem>
    </Flex>
  ) : (
    <Flex>
      <FlexItem
        shrink={0}
        basis={6}
        mr={title ? 4 : 2}
        children={icon}
      />
      {title || children ? (
        <FlexItem>
          <Spacer size="xs">
            {title ? (
              <Heading
                size="3"
                children={title}
              />
            ) : (
              null
            )}
            {children ? (
              <Paragraph
                children={children}
              />
            ) : (
              null
            )}
          </Spacer>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
    )

)
