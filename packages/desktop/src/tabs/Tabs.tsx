import React, {FC} from 'react'

import {TabsControl, TabsSpacer, Tab, TabList, TabPanel} from '@qiwi/pijma-core'

export interface TabsProps {
  size?: 's' | 'm' | 'l'
  selected?: number
  border?: 'long' | 'short'
  vertical?: boolean
  onSelect?: (selected: number) => void
  children: React.ReactNode
  items: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const Tabs: FC<TabsProps> = props => {
  return (
    <TabsSpacer
      size={props.size}
      children={
        <TabsControl
          {...props}
          children={rendreProps => {
            return (
              <>
                <TabList {...rendreProps.tabList}>
                  {rendreProps.tabs.map(({title, ...tabProps}, index) => (
                    <Tab key={index} index={index} {...tabProps}>
                      {title}
                    </Tab>
                  ))}
                </TabList>
                <TabPanel>{rendreProps.content}</TabPanel>
              </>
            )
          }}
        />
      }
    />
  )
}
