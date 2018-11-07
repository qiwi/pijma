import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {Caption} from '@qiwi/pijma-mobile'

export default class CaptionExample extends Component {

  public render() {
    return (
      <Spacer size="m">
        <Caption>Caption</Caption>
        <Caption color="default">Caption</Caption>
      </Spacer>
    )
  }

}
