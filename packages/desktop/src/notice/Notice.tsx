import React, {FC, isValidElement, ReactNode} from 'react'
import {Flex, FlexItem, Spacer} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '@qiwi/pijma-desktop'

export interface NoticeProps {
  icon: ReactNode
  title?: string | ReactNode
}

export const Notice: FC<NoticeProps> = ({icon, title, children}) => (
  <Flex>
    <FlexItem
      shrink={0}
      basis={6}
      mr={2}
      children={icon}
    />
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
