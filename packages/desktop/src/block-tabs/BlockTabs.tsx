import React, {FC} from 'react'

import {
  TabsControl,
  BlockContent,
  Tab,
  TabList,
  TabPanel,
  Block,
} from '@qiwi/pijma-core'

export interface BlockTabsProps {
  indent?: 's' | 'm' | 'l'
  contentIndent?: 's' | 'm' | 'l'
  selected?: number
  border?: boolean
  vertical?: boolean
  bottom?: number
  onSelect?: (selected: number) => void
  children: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const BlockTabs: FC<BlockTabsProps> = ({children, contentIndent,...props}) => {
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
                    {rendreProps.tabs.map(({title, ...tabProps}, index) => (
                      <Tab key={index} index={index} {...tabProps}>
                        {title}
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanel indent={contentIndent}>
                    {rendreProps.content}
                  </TabPanel>
                </>
              )
            }}
          />
        }
      />
    </Block>
  )
}
