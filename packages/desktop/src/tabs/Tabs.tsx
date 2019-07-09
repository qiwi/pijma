import React, {FC} from 'react'

import {TabsControl, BlockContent, Tab, TabList, TabPanel, Block} from '@qiwi/pijma-core'

export interface TabsProps {
  indent?: 's' | 'm' | 'l'
  contentIndent?: 's' | 'm' | 'l'
  selected?: number
  border?: 'long' | 'short'
  vertical?: boolean
  bottom?: number
  block?: boolean
  onSelect?: (selected: number) => void
  children: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const Tabs: FC<TabsProps> = ({children, block, contentIndent, ...props}) => {
  const component = (
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
                <TabPanel block={!block} indent={contentIndent}>{rendreProps.content}</TabPanel>
              </>
            )
          }}
        />
      }
    />
  )

  if (block) {
    return (
      <Block>
        {component}
      </Block>
    )
  }

  return component
}
