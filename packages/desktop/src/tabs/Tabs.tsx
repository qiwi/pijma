import React, {FC, ReactNode} from 'react'

import {TabsControl, TabHeader, Flex, FlexItem, Box, IconProps} from '@qiwi/pijma-core'

export interface TabsProps {
  selected?: number
  vertical?: boolean
  centered?: boolean
  indent?: 's' | 'm'
  onChange?: () => void
  items: {
    title: string
    icon?: IconProps['name']
    content?: ReactNode
  }[]
}

const HeaderIndent: Record<NonNullable<TabsProps['indent']>, number> = {
  s: 4,
  m: 6,
}

export const Tabs: FC<TabsProps> = ({
  selected,
  vertical,
  // centered,
  onChange,
  indent = 's',
  items,
}) => {
  return (
    <TabsControl
      selected={selected}
      onChange={onChange}
      length={items.length}
      children={renderProps => (
        <Flex direction="column">
          <Flex direction="row" mb={HeaderIndent[indent]}>
            {renderProps.items.map((item, index) => (
              <Box key={index} mr={index === items.length ? 0 : 5}>
                <TabHeader
                  focus={item.focus}
                  vertical={vertical}
                  title={items[index].title}
                  icon={items[index].icon}
                  select={item.select}
                  ref={item.ref}
                  onClick={item.onClick}
                  onMouseEnter={item.onMouseEnter}
                  onMouseLeave={item.onMouseLeave}
                />
              </Box>
            ))}
          </Flex>
          {items.map(({content}, index) => (
            <FlexItem key={index}>
              <Box
                display={selected === index ? 'block' : 'none'}
                children={content}
              />
            </FlexItem>
          ))}
        </Flex>
      )}
    />
  )
}
