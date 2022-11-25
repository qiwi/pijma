import {
  Card,
  Flex,
  FlexItem,
  IconProps,
  Pos,
  styled,
  TabBorder,
  TabHeader,
  TabsControl,
  Value,
} from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

import { Paragraph } from '../typography'

export interface BlockTabsProps {
  items: {
    title: string
    icon?: IconProps['name']
    content?: ReactNode
  }[]
  select?: number
  tabIndex?: number
  vertical?: boolean
  centered?: boolean
  hr?: boolean
  indent?: 's' | 'm' | 'l'
  pt?: Value
  pb?: Value
  stub?: boolean | boolean[]
  onChange?: (selected: number) => void
}

const BlockTabsIndent: Record<
  NonNullable<BlockTabsProps['indent']>,
  [Value, Value, Value, Value]
> = {
  s: [8, 8, 8, 8],
  m: [11, 11, 12, 11],
  l: [11, 17, 12, 17],
}

const ContentIndent: Record<NonNullable<BlockTabsProps['indent']>, Value> = {
  s: 4,
  m: 6,
  l: 6,
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

export const BlockTabs: FC<BlockTabsProps> = ({
  items,
  select = 0,
  tabIndex = 0,
  vertical = false,
  centered = false,
  stub = false,
  hr = true,
  indent = 'm',
  pt,
  pb,
  onChange,
}) =>
  stub ? (
    <Pos type="relative">
      <Flex
        direction="column"
        pt={pt === undefined ? BlockTabsIndent[indent][0] : pt}
        pr={BlockTabsIndent[indent][1]}
        pb={pb === undefined ? BlockTabsIndent[indent][2] : pb}
        pl={BlockTabsIndent[indent][3]}
      >
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
          <TabBorder
            width={centered ? 'calc(33% - 20px)' : (vertical ? 13 : 21)}
            left={0}
            radius={hr}
            stub
          />
        </FlexOverflow>
        <FlexItem>
          {hr ? (
            <Pos type="absolute" width={1} left={0} zIndex={0}>
              <Card mt="-1px" bg="#e6e6e6" width={1} height="1px" />
            </Pos>
          ) : null}
        </FlexItem>
        <FlexItem mt={4}>
          <Paragraph stub />
        </FlexItem>
      </Flex>
    </Pos>
  ) : (
    <TabsControl
      select={select}
      length={items.length}
      onChange={onChange}
      children={(renderProps) => (
        <Pos type="relative">
          <Flex
            direction="column"
            pt={pt === undefined ? BlockTabsIndent[indent][0] : pt}
            pr={BlockTabsIndent[indent][1]}
            pb={pb === undefined ? BlockTabsIndent[indent][2] : pb}
            pl={BlockTabsIndent[indent][3]}
          >
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
                radius={hr}
              />
            </FlexOverflow>
            {hr ? (
              <FlexItem>
                <Pos type="absolute" width={1} left={0} zIndex={0}>
                  <Card mt="-1px" bg="#e6e6e6" width={1} height="1px" />
                </Pos>
              </FlexItem>
            ) : null}
            {items.map(({ content }, index) => (
              <TabContent
                key={index}
                display={select === index ? 'block' : 'none'}
                pt={ContentIndent[indent]}
                children={content}
              />
            ))}
          </Flex>
        </Pos>
      )}
    />
  )

BlockTabs.displayName = 'BlockTabs'

BlockTabs.defaultProps = {
  select: 0,
  tabIndex: 0,
  vertical: false,
  centered: false,
  stub: false,
  hr: true,
  indent: 'm',
}
