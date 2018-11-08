import React, {Component, Fragment} from 'react'

import {Paragraph, Text} from '@qiwi/pijma-desktop'

export default class TextExample extends Component {

  public render() {
    return (
      <Fragment>
        <Paragraph size="l">Paragraph L <Text bold>Dark 500</Text></Paragraph>
        <Paragraph size="l">Paragraph L <Text bold><Text color="error">Error</Text> 500</Text></Paragraph>
        <Paragraph size="l">Paragraph L <Text color="success">Success</Text> 300</Paragraph>
        <Paragraph size="l" color="service">Paragraph L <Text color="warning">Warning</Text> 300</Paragraph>
        <Paragraph size="m">Paragraph M <Text bold>Dark 500</Text></Paragraph>
        <Paragraph size="m">Paragraph M <Text bold><Text color="error">Error</Text> 500</Text></Paragraph>
        <Paragraph size="m">Paragraph M <Text color="success">Success</Text> 300</Paragraph>
        <Paragraph size="m" color="service">Paragraph M <Text color="warning">Warning</Text> 300</Paragraph>
        <Paragraph size="s">Paragraph S <Text bold>Dark 500</Text></Paragraph>
        <Paragraph size="s">Paragraph S <Text bold><Text color="error">Error</Text> 500</Text></Paragraph>
        <Paragraph size="s">Paragraph S <Text color="success">Success</Text> 300</Paragraph>
        <Paragraph size="s" color="service">Paragraph S <Text color="warning">Warning</Text> 300</Paragraph>
      </Fragment>
    )
  }

}
