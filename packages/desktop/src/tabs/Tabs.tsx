import React, {FC} from 'react'

import {TabsControl, Tab, TabList, Box} from '@qiwi/pijma-core'

export interface TabsProps {
  selected?: number
  vertical?: boolean
  onSelect?: (selected: number) => void
  children: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode[]
  }[]
}

export const Tabs: FC<TabsProps> = ({children,...props}) => {
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
                <Tab key={index} {...tabProps} />
              ))}
            </TabList>
            {rendreProps.tabs.map(({content, selected}, index) => (
                <Box key={index} display={selected ? 'block' : 'none'} children={content} />
              ))}
          </>
        )
      }}
    />
  )
}
