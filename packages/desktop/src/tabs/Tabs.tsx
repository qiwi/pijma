import React, {FC} from 'react'

import {TabsControl, TabHeader, Box} from '@qiwi/pijma-core'

export interface BlockTabsProps {
  selected?: number
  vertical?: boolean
  center?: boolean
  onChange?: (selected: number) => void
  items: {
    icon?: React.ReactElement
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const Tabs: FC<BlockTabsProps> = ({
  items,
  vertical,
  center,
  onChange,
  selected,
}) => {
  return (
    <TabsControl
      selected={selected}
      onChange={onChange}
      children={(rendreProps) => {
        return (
          <>
            <TabHeader
              border={false}
              onKeyDown={rendreProps.onKeyDown}
              onChange={rendreProps.onChange}
              onMouseEnter={rendreProps.onMouseEnter}
              onMouseLeave={rendreProps.onMouseLeave}
              center={center}
              selected={rendreProps.selected}
              focused={rendreProps.focused}
              vertical={vertical}
              items={items}
            />
            {items.map(({content}, index) => (
              <Box
                key={index}
                display={rendreProps.selected === index ? 'block' : 'none'}
                children={content}
              />
            ))}
          </>
        )
      }}
    />
  )
}
