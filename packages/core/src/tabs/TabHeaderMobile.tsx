import React, {FC} from 'react'

import {Flex, Card, CardProps} from '../primitive'

import {Tab} from './Tab'

export interface TabHeaderMobileProps {
  center?: boolean
  border?: boolean
  indent?: 'm' | 'l'
  vertical?: boolean
  items: {
    icon?: React.ReactElement
    title: React.ReactNode
    content: React.ReactNode
  }[]
  onKeyDown?: React.KeyboardEventHandler
  selected: number
  focused: number
  onChange: (selected: number) => void
  onMouseEnter: (selected: number) => void
  onMouseLeave: React.MouseEventHandler
}

const SpacerSize: {
  [indent in NonNullable<TabHeaderMobileProps['indent']>]: number
} = {
  m: 4,
  l: 6,
}

export const TabHeaderMobile: FC<TabHeaderMobileProps & CardProps> = ({
  center,
  items,
  vertical,
  border = true,
  indent,
  selected,
  focused,
  onChange,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
}) => {
  const gap = border && indent ? SpacerSize[indent] : 0

  const mb = (indent ? SpacerSize[indent] : SpacerSize['m']) / 2

  return (
    <Card
      bb={border ? '1px solid #e6e6e6' : ''}
      mb={mb}
      mr={gap * -1}
      ml={gap * -1}
      pr={gap}
      pl={gap}
    >
      <Flex
        justify={center ? 'center' : 'flex-start'}
        overflow={'auto'}
        onKeyDown={onKeyDown}
      >
        {items.map(({icon, title}, index) => (
          <Tab
            small
            key={index}
            border={border}
            vertical={vertical}
            icon={icon}
            selected={selected === index}
            focused={focused === index}
            onChange={() => onChange(index)}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
            title={title}
          />
        ))}
      </Flex>
    </Card>
  )
}
