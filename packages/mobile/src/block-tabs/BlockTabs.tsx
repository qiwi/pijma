import React, {FC, ReactNode} from 'react'

import {
  TabsControl,
  TabHeader,
  Flex,
  FlexItem,
  IconProps,
  Pos,
  Card,
  TabBorder,
  styled,
  FlexOptions,
  Value,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'

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
  indent?: 'm' | 'l'
  pt?: Value
  pb?: Value
  stub?: boolean
  onChange?: (selected: number) => void
}

const BlockTabsIndent: Record<NonNullable<BlockTabsProps['indent']>, [Value, Value, Value, Value]> = {
  m: [4, 4, 4, 4],
  l: [6, 6, 6, 6],
}

const FlexOverflow = styled(Flex, FlexOptions)({
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  position: 'relative',
})

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
}) => {
  return (
    stub ? (
      <Pos type="relative">
        <Flex
          direction="column"
          pt={pt !== undefined ? pt : BlockTabsIndent[indent][0]}
          pr={BlockTabsIndent[indent][1]}
          pb={pb !== undefined ? pb : BlockTabsIndent[indent][2]}
          pl={BlockTabsIndent[indent][3]}
        >
          <FlexOverflow
            direction="row"
            overflow="auto"
            justify={centered ? 'space-between' : 'flex-start'}
          >
            {[true, false, false].map((item, index) => (
              <TabHeader
                key={index}
                title="stub"
                indent={index === items.length - 1 ? 0 : 5}
                wrap={!centered}
                tabIndex={-1}
                icon="qiwi"
                vertical={vertical}
                select={item}
                width={centered ? 1 : undefined}
                stub
              />
            ))}
            <TabBorder
              width={centered ? 'calc(33% - 20px)' : vertical ? 13 : 21}
              left={0}
              radius={hr}
              stub
            />
          </FlexOverflow>
          <FlexItem>
            {hr ? (
              <Pos type="absolute" width={1} left={0} zIndex={0}>
                <Card mt="-1px" bg="#e6e6e6" width={1} height="1px"/>
              </Pos>
            ) : (
              null
            )}
          </FlexItem>
          <FlexItem mt={4}>
            <Paragraph stub/>
          </FlexItem>
        </Flex>
      </Pos>
    ) : (
      <TabsControl
        select={select}
        length={items.length}
        onChange={onChange}
        children={renderProps => (
          <Pos type="relative">
            <Flex
              direction="column"
              pt={pt !== undefined ? pt : BlockTabsIndent[indent][0]}
              pr={BlockTabsIndent[indent][1]}
              pb={pb !== undefined ? pb : BlockTabsIndent[indent][2]}
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
                  left={`${renderProps.borderOffSetLeft}px`}
                  radius={hr}
                />
              </FlexOverflow>
              {hr ? (
                <FlexItem>
                  <Pos type="absolute" width={1} left={0} zIndex={0}>
                    <Card mt="-1px" bg="#e6e6e6" width={1} height="1px"/>
                  </Pos>
                </FlexItem>
              ) : (
                null
              )}
              {items.map(({content}, index) => (
                <FlexItem
                  key={index}
                  display={select === index ? 'block' : 'none'}
                  pt={4}
                  children={content}
                />
              ))}
            </Flex>
          </Pos>
        )}
      />
    )
  )
}

BlockTabs.defaultProps = {
  select: 0,
  tabIndex: 0,
  vertical: false,
  centered: false,
  stub: false,
  hr: true,
  indent: 'm',
}
