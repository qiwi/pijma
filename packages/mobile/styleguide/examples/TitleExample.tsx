import React, {Component, Fragment} from 'react'

import {Title} from '@qiwi/pijma-mobile'

export default class TitleExample extends Component {

  public render() {
    return (
      <Fragment>
        <Title size="1">Title H1</Title>
        <Title size="2">Title H2</Title>
      </Fragment>
    )
  }

}
