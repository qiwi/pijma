import React, {FC} from 'react'

import {TabsControl, Tab, TabList, TabPanel} from '@qiwi/pijma-core'

export interface TabsProps {
  contentIndent?: 's' | 'm' | 'l'
  selected?: number
  vertical?: boolean
  bottom?: number
  onSelect?: (selected: number) => void
  children: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const Tabs: FC<TabsProps> = ({children, contentIndent, ...props}) => {
  return (
    <TabsControl
      border={false}
      items={children}
      {...props}
      children={rendreProps => {
        return (
          <>
            <TabList {...rendreProps.tabList}>
              {rendreProps.tabs.map(({title, ...tabProps}, index) => (
                <Tab key={index} index={index} small={true} {...tabProps}>
                  {title}
                </Tab>
              ))}
            </TabList>
            <TabPanel block indent={contentIndent}>
              {rendreProps.content}
            </TabPanel>
          </>
        )
      }}
    />
  )
}
