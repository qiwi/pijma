import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {Heading} from '@qiwi/pijma-mobile'

export default class HeadingExample extends Component {

  public render() {
    return (
      <Spacer size="m">
        <Heading size="1">Heading H1</Heading>
        <Heading size="2">Heading H2</Heading>
        <Heading size="3">Heading H3</Heading>
        <Heading size="4">Heading H4</Heading>
      </Spacer>
    )
  }

}
