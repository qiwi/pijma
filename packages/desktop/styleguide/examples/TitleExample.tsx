import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {Title} from '@qiwi/pijma-desktop'

export default class TitleExample extends Component {

  public render() {
    return (
      <Spacer size="m">
        <Title size="1">Title H1</Title>
        <Title size="2">Title H2</Title>
      </Spacer>
    )
  }

}
