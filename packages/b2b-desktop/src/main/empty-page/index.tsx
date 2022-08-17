import { Card, Flex, FlexItem } from '@qiwi/pijma-core'
import { Heading, Paragraph } from '@qiwi/pijma-desktop'
import React, { Component } from 'react'

import { B2bIcon } from '../Icon'
import { Offset } from '../offset'

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <Offset mb={24} mt={40} ml={0} mr={0}>
          <Heading size="1">Ошибка 404</Heading>
        </Offset>

        <Card
          r={10}
          width="1180px"
          height="500px"
          bg="#fff"
          p="44px 44px 48px 44px"
        >
          <Flex>
            <FlexItem mr={3}>
              <B2bIcon icon="attention" h={24} w={24} iconColor="#d0021b" />
            </FlexItem>
            <FlexItem>
              <Offset mb={8} ml={0} mr={0}>
                <Heading size="4">Страница не найдена</Heading>
              </Offset>
              <Paragraph bold={false} size="m" color="support">
                Возможно, в вашей ссылке опечатка.
              </Paragraph>
              <Paragraph bold={false} size="m" color="support">
                Или когда-то такая страница на сайте была, но теперь её нет.
              </Paragraph>
            </FlexItem>
          </Flex>
        </Card>
      </div>
    )
  }
}

export default EmptyPage
