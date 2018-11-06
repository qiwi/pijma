import React, {Component, Fragment} from 'react'

import {Paragraph, Text} from '@qiwi/pijma-desktop'

export default class TextExample extends Component {

  public render() {
    return (
      <Fragment>
        <Paragraph size="accent">Paragraph M <Text bold>Dark 500</Text></Paragraph>
        <Paragraph size="accent">Paragraph M <Text bold><Text color="error">Error</Text> 500</Text></Paragraph>
        <Paragraph size="accent">Paragraph M <Text color="success">Success</Text> 300</Paragraph>
        <Paragraph size="accent" color="service">Paragraph M <Text color="warning">Warning</Text> 300</Paragraph>
        <Paragraph size="normal">Paragraph M <Text bold>Dark 500</Text></Paragraph>
        <Paragraph size="normal">Paragraph M <Text bold><Text color="error">Error</Text> 500</Text></Paragraph>
        <Paragraph size="normal">Paragraph M <Text color="success">Success</Text> 300</Paragraph>
        <Paragraph size="normal" color="service">Paragraph M <Text color="warning">Warning</Text> 300</Paragraph>
        <Paragraph size="assist">Paragraph S <Text bold>Dark 500</Text></Paragraph>
        <Paragraph size="assist">Paragraph S <Text bold><Text color="error">Error</Text> 500</Text></Paragraph>
        <Paragraph size="assist">Paragraph S <Text color="success">Success</Text> 300</Paragraph>
        <Paragraph size="assist" color="service">Paragraph S <Text color="warning">Warning</Text> 300</Paragraph>
      </Fragment>
    )
  }

}
