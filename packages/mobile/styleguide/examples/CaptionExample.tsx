import React, {Component, Fragment} from 'react'

import {Caption} from '@qiwi/pijma-mobile'

export default class CaptionExample extends Component {

  public render() {
    return (
      <Fragment>
        <Caption>Caption</Caption>
        <Caption color="default">Caption</Caption>
      </Fragment>
    )
  }

}
