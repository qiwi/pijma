import React, {FC} from 'react'

import {Icon, IconProps} from '../icon'
import {Flex, FlexItem, Lnk, Card} from '../primitive'

const CardLink = Card.withComponent(Lnk)

export interface FooterIconLinkProps {
  children: {href: string, target?: string, icon: IconProps['name']}[]
}

export const FooterIconLink: FC<FooterIconLinkProps> = ({children}) => (
  <Flex justify="space-between">
    {children.map((item, i) => (
      <FlexItem key={i} width={10} height={10} shrink={0} align="center" justify="center">
        <CardLink display="block" r={40} p={2} s="0 0 0 1px #ccc" href={item.href} target={item.target}>
          <Icon color="#999" name={item.icon}/>
        </CardLink>
      </FlexItem>
    ))}
  </Flex>
)
