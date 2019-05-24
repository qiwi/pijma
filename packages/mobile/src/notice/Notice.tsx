import React, {FC, isValidElement, ReactNode} from 'react'
import {Box, Flex, FlexItem, Icon} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '@qiwi/pijma-mobile'
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
    <FlexItem>
      {title ? (
        <Box mb={2}>
          <Heading
            size="3"
            children={title}
          />
        </Box>
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
    </FlexItem>
  </Flex>
)
