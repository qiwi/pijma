import React, {Component, Fragment} from 'react'

import {Heading} from '@qiwi/pijma-desktop'

export default class HeadingExample extends Component {

  public render() {
    return (
      <Fragment>
        <Heading size="1">Heading H1</Heading>
        <Heading size="2">Heading H2</Heading>
        <Heading size="3">Heading H3</Heading>
        <Heading size="4">Heading H4</Heading>
        <Heading size="5">Heading H5</Heading>
      </Fragment>
    )
  }

}
