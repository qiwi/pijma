import React, {FC} from 'react'

import {TabsControl, TabHeaderMobile, Block, Box} from '@qiwi/pijma-core'
import {BlockContent} from '../block-content'

export interface BlockTabsProps {
  indent?: 'm' | 'l'
  selected?: number
  border?: boolean
  vertical?: boolean
  center?: boolean
  onChange?: (selected: number) => void
  items: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const BlockTabs: FC<BlockTabsProps> = ({
  items,
  border,
  vertical,
  indent,
  center,
  onChange,
  selected,
}) => {
  return (
    <Block>
      <BlockContent
        indent={indent}
        children={
          <TabsControl
            selected={selected}
            onChange={onChange}
            children={(rendreProps) => {
              return (
                <>
                  <TabHeaderMobile
                    border={border}
                    onKeyDown={rendreProps.onKeyDown}
                    onChange={rendreProps.onChange}
                    onMouseEnter={rendreProps.onMouseEnter}
                    onMouseLeave={rendreProps.onMouseLeave}
                    indent={indent}
                    center={center}
                    selected={rendreProps.selected}
                    focused={rendreProps.focused}
                    vertical={vertical}
                    items={items}
                  />
                  {items.map(({content}, index) => (
                    <Box
                      key={index}
                      display={
                        rendreProps.selected === index ? 'block' : 'none'
                      }
                      children={content}
                    />
                  ))}
                </>
              )
            }}
          />
        }
      />
    </Block>
  )
}
