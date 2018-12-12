import React, {Component} from 'react'

import {InfoBlock, Card} from '@qiwi/pijma-core'

export default class ActionsBlockExample extends Component<{}, {}> {

  public render() {
    return (
      <Card bg='#eee' p={7}>
        <InfoBlock>
          <Card p={4} bg='#fff'>info</Card>
          <Card p={4} bg='#fff'>block</Card>
          <Card p={4} bg='#fff'>with</Card>
          <Card p={4} bg='#fff'>dividers</Card>
        </InfoBlock>
      </Card>

    )
  }

}
