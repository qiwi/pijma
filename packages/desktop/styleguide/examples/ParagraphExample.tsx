import React, {Component, Fragment} from 'react'

import {Paragraph} from '@qiwi/pijma-desktop'

export default class ParagraphExample extends Component {

  public render() {
    return (
      <Fragment>
        <Paragraph size="accent">Paragraph Accent</Paragraph>
        <Paragraph size="accent" color="service">Paragraph Accent Service</Paragraph>
        <Paragraph size="normal">Paragraph Normal</Paragraph>
        <Paragraph size="normal" color="service">Paragraph Normal Service</Paragraph>
        <Paragraph size="assist">Paragraph Assist</Paragraph>
        <Paragraph size="assist" color="service">Paragraph Assist Service</Paragraph>
      </Fragment>
    )
  }

}
