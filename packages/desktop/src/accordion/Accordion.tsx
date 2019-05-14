import React, {FunctionComponent, ReactNode} from 'react'

import {AccordionControl, Box, AccordionItem, Card} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Paragraph} from '../typography'

export interface AccordionProps<I> {
  items: I[]
}

export interface AccordionItemModel {
  title: string
  content: ReactNode
}

const Accordion: FunctionComponent<
  AccordionProps<AccordionItemModel>
> = props => (
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" py={3}>
    <AccordionControl<AccordionItemModel>
      items={props.items}
      children={renderProps => (
        <Box onMouseLeave={renderProps.onMouseLeave}>
          {renderProps.items.map((item, index) => (
            <AccordionItem
              {...item}
              key={index}
              openedIcon={<Icon name="angle-small-up" />}
              closedIcon={<Icon name="angle-small-down" />}
              title={
                <Paragraph bold size="m">
                  {item.title}
                </Paragraph>
              }
            />
          ))}
        </Box>
      )}
    />
  </Card>
)

export default Accordion
