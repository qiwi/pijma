import React, {Component, Fragment} from 'react'

import {styled} from '@qiwi/pijma-core'
import {IconName, WeakIcon} from '@qiwi/pijma-media'

const IconWrapper = styled('span')({
  display: 'inline-block',
  width: 24,
  height: 24,
  margin: 8,
})

const iconNames: IconName[] = [
  'calendar',
  'clock',
  'cross',
  'download',
  'eye-closed',
  'eye-opened',
  'hamburger',
  'login',
  'logout',
  'percent',
  'question',
  'repeat',
  'search',
  'settings',
  'share',
  'star',
]

export default class WeakIconExample extends Component {

  public render() {
    return (
      <Fragment>
        {iconNames.map(name => (
          <IconWrapper key={name}>
            <WeakIcon name={name}/>
          </IconWrapper>
        ))}
      </Fragment>
    )
  }

}
