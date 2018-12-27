import React, {Component} from 'react'

import {applyDefaultClickHandler, Spacer} from '@qiwi/pijma-core'
import {Link} from '@qiwi/pijma-desktop'

applyDefaultClickHandler((href, target) => window.open(href, target || '_self'))

export default class LinkExample extends Component<{}, {}> {

  public render() {
    return (
      <Spacer size="m">
        <Link size="l" href="https://qiwi.com">Link L</Link>
        <Link href="https://qiwi.com" target="_blank">Link M</Link>
        <Link size="s" href="https://qiwi.com" title="link s" onClick={() => alert('alert 2')}>Link S</Link>
      </Spacer>
    )
  }

}
