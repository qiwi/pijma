import React, {FC} from 'react'

import {TabsControl, Tab, TabList} from '@qiwi/pijma-core'

export interface TabsProps {
  selected?: number
  vertical?: boolean
  onSelect?: (selected: number) => void
  children: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const Tabs: FC<TabsProps> = ({children, ...props}) => {
  return (
    <TabsControl
      border={false}
      items={children}
      {...props}
      children={(rendreProps) => {
        return (
          <>
            <TabList {...rendreProps.tabList}>
              {rendreProps.tabs.map((tabProps, index) => (
                <Tab key={index} small {...tabProps} />
              ))}
            </TabList>
            {rendreProps.content}
          </>
        )
      }}
    />
  )
}
