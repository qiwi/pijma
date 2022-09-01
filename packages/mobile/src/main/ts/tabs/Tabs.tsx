import {
  Flex,
  FlexItem,
  IconProps,
  styled,
  TabBorder,
  TabHeader,
  TabsControl,
} from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

import { Paragraph } from '../typography'

export interface TabsProps {
  items: {
    title: string
    icon?: IconProps['name']
    content?: ReactNode
  }[]
  select?: number
  tabIndex?: number
  vertical?: boolean
  centered?: boolean
  stub?: boolean | boolean[]
  onChange?: (selected: number) => void
}

const FlexOverflow = styled(Flex)({
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  position: 'relative',
})

FlexOverflow.displayName = 'FlexOverflow'

const TabContent = styled(FlexItem)()

TabContent.displayName = 'TabContent'

export const Tabs: FC<TabsProps> = ({
  items,
  select = 0,
  tabIndex = 0,
  vertical = false,
  centered = false,
  stub = false,
  onChange,
}) =>
  stub ? (
    <Flex direction="column">
      <FlexOverflow
        direction="row"
        overflow="auto"
        justify={centered ? 'space-between' : 'flex-start'}
      >
        {(Array.isArray(stub) ? stub : [true, true, true]).map(
          (icon, index, arr) => (
            <TabHeader
              key={index}
              title="stub"
              indent={index === arr.length - 1 ? 0 : 5}
              wrap={!centered}
              tabIndex={-1}
              icon={icon ? 'qiwi' : undefined}
              vertical={vertical}
              select={false}
              width={centered ? 1 : undefined}
              stub
            />
          ),
        )}
      </FlexOverflow>
      <FlexItem mt={4}>
        <Paragraph stub />
      </FlexItem>
    </Flex>
  ) : (
    <TabsControl
      select={select}
      length={items.length}
      onChange={onChange}
      children={(renderProps) => (
        <Flex direction="column">
          <FlexOverflow
            direction="row"
            overflow="auto"
            justify={centered ? 'space-between' : 'flex-start'}
          >
            {renderProps.items.map((item, index) => (
              <TabHeader
                key={index}
                title={items[index].title}
                indent={index === items.length - 1 ? 0 : 5}
                wrap={!centered}
                tabIndex={tabIndex}
                icon={items[index].icon}
                vertical={vertical}
                select={item.select}
                focus={item.focus}
                width={centered ? 1 : undefined}
                ref={item.ref}
                onFocus={item.onFocus}
                onBlur={item.onBlur}
                onMouseEnter={item.onMouseEnter}
                onMouseLeave={item.onMouseLeave}
                onKeyDown={renderProps.onKeyDown}
                onClick={item.onClick}
              />
            ))}
            <TabBorder
              width={`${renderProps.borderWidth}px`}
              left={`${renderProps.borderLeft}px`}
            />
          </FlexOverflow>
          {items.map(({ content }, index) => (
            <TabContent
              key={index}
              display={select === index ? 'block' : 'none'}
              pt={4}
              children={content}
            />
          ))}
        </Flex>
      )}
    />
  )

Tabs.displayName = 'Tabs'

Tabs.defaultProps = {
  select: 0,
  tabIndex: 0,
  vertical: false,
  centered: false,
  stub: false,
}
