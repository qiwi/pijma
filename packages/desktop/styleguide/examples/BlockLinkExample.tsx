import React, {Component} from 'react'

import {applyDefaultClickHandler, Spacer, Box} from '@qiwi/pijma-core'
import {BlockLink, Text} from '@qiwi/pijma-desktop'

applyDefaultClickHandler((href, target) => window.open(href, target || '_self'))

export default class BlockLinkExample extends Component<{}, {}> {

  public render() {
    return (
      <Spacer size="m">
        <BlockLink href="https:/qiwi.com" accent >
          {({active, focus, hover}) => (
            <Box p={10}>
              <Text
                color={hover || active || focus ? 'warning' : 'default'}
                decoration="none"
                transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
              >Block link</Text>
            </Box>
          )}
        </BlockLink>
      </Spacer>
    )
  }

}
