import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Spacer} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '../typography/'

export interface NoticeProps {
  icon: ReactNode
  title?: ReactNode
}

export const Notice: FC<NoticeProps> = ({icon, title, children}) => (
  <Flex role="alertdialog" aria-label="notice">>
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
