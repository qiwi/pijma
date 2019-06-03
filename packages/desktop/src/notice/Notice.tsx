import React, {FC, isValidElement, ReactNode} from 'react'
import {Flex, FlexItem, Icon, Spacer} from '@qiwi/pijma-core'
import {IconName} from '@qiwi/pijma-media'
import {Heading, Paragraph} from '../typography/'

export interface NoticeProps {
  icon: ReactNode
  title?: ReactNode
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
      <FlexItem
        shrink={0}
        basis={6}
        mr={title ? 4 : 2}
        children={icon}
      />
    ) : (
      null
    )}
    {title || children ? (
      <FlexItem>
        <Spacer size="xs">
          {title ? (
            <Heading
              size="4"
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
