import React, {FC, isValidElement, ReactNode} from 'react'
import {Flex, FlexItem, Icon, Spacer} from '@qiwi/pijma-core'
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
