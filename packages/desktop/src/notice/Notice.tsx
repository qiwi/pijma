import React, {FC, isValidElement, ReactNode} from 'react'
import {Box, Flex, FlexItem, Icon} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '@qiwi/pijma-desktop'
import {IconName} from '@qiwi/pijma-media'

export interface NoticeProps {
  icon: ReactNode | IconName
  title?: string | ReactNode
}

export const Notice: FC<NoticeProps> = ({icon, title, children}) => (
  <Flex>
    {typeof icon === 'string' ? (
      <FlexItem
        shrink={0}
        basis={6}
        mr={title ? 4 : 2}
        children={<Icon name={icon as IconName}/>}
      />
    ) : isValidElement(icon) ? (
      icon
    ) : (
      null
    )}
    {title || children ? (
      <FlexItem>
        <Box mb={2}>
          <Heading
            size="4"
            children={title}
          />
        </Box>
        <Paragraph
          children={children}
        />
      </FlexItem>
    ) : (
      null
    )}
  </Flex>
)
