import React, {Component} from 'react'

import {Block, Card, Spacer, Flex} from '@qiwi/pijma-core'

export default class BlockExample extends Component<{}, {}> {

  public render() {
    return (
      <Card bg='#eee' p={7}>
        <Spacer size='l'>
          <Block>
            <Card p={4} bg='#fff' >action block</Card>
          </Block>
          <Flex>
            <Card mr={3} width='50%'>
              <Block hover>
                <Card p={4} bg='#fff' >action block hovered</Card>
              </Block>
            </Card>
            <Card width='50%'>
              <Block hover accent>
                <Card p={4} bg='#fff'>action block hover accented</Card>
              </Block>
            </Card>
          </Flex>
        </Spacer>
      </Card>


    )
  }

}
