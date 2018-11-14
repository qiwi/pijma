import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {Paragraph} from '@qiwi/pijma-desktop'

export default class ParagraphExample extends Component {

  public render() {
    return (
      <Spacer size="m">
        <Paragraph size="l">Paragraph L</Paragraph>
        <Paragraph size="l" color="support">Paragraph L Service</Paragraph>
        <Paragraph size="m">Paragraph M</Paragraph>
        <Paragraph size="m" color="support">Paragraph M Service</Paragraph>
        <Paragraph size="s">Paragraph S</Paragraph>
        <Paragraph size="s" color="support">Paragraph S Service</Paragraph>
      </Spacer>
    )
  }

}
