import React, {FC} from 'react'

import {TabsControl, BlockContent, Tab, TabList, Block} from '@qiwi/pijma-core'

export interface BlockTabsProps {
  indent?: 's' | 'm' | 'l'
  selected?: number
  border?: boolean
  vertical?: boolean
  onSelect?: (selected: number) => void
  children: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const BlockTabs: FC<BlockTabsProps> = ({children, ...props}) => {
  return (
    <Block>
      <BlockContent
        indent={props.indent}
        children={
          <TabsControl
            items={children}
            {...props}
            children={(rendreProps) => {
              return (
                <>
                  <TabList {...rendreProps.tabList}>
                    {rendreProps.tabs.map((tabProps, index) => (
                      <Tab key={index} {...tabProps} />
                    ))}
                  </TabList>
                  {rendreProps.content}
                </>
              )
            }}
          />
        }
      />
    </Block>
  )
}
