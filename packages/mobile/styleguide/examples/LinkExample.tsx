import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {Link} from '@qiwi/pijma-mobile'

export default class LinkExample extends Component<{}, {}> {

  public render() {
    return (
      <Spacer size="m">
        <Link size="l" href="https://qiwi.com">Link L</Link>
        <Link href="https://qiwi.com">Link M</Link>
        <Link size="s" href="https://qiwi.com" title="link s" target="_blank">Link S</Link>
      </Spacer>
    )
  }

}
