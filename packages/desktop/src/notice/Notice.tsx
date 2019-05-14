import React, {FC, isValidElement, ReactNode} from 'react'
import {Flex, FlexItem, Icon, Spacer} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '@qiwi/pijma-desktop'
import {IconName} from "@qiwi/pijma-media";

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
        mr={2}
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
          {typeof title === 'string' ? (
            <Heading
              size="4"
              children={title}
            />
          ) : isValidElement(title) ? (
            title
          ) : (
            null
          )}
          {typeof children === 'string' ? (
            <Spacer size="xs">
              <Paragraph
                children={children.split('\n').reduce<Array<string | ReactNode>>(
                  (currentArray, currentChild, index) => (
                    currentArray.concat([currentChild, <br key={index}/>])
                  ), [])}
              />
            </Spacer>
          ) : isValidElement(children) ? (
            children
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
