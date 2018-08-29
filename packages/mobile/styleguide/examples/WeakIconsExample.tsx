import React, {Component, Fragment} from 'react'

import {styled} from '@qiwi/pijma-core'
import {IconName, WeakIcon} from '@qiwi/pijma-media'

const IconWrapper = styled.span({
  display: 'inline-block',
  width: 24,
  height: 24,
  margin: 8,
})

const PaysysIconWrapper = styled.span({
  display: 'inline-block',
  width: 48,
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

const paysysIcons: IconName[] = [
  'mastercard',
  'mir',
  'visa',
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
        {paysysIcons.map(name => (
          <PaysysIconWrapper key={name}>
            <WeakIcon name={name}/>
          </PaysysIconWrapper>
        ))}
      </Fragment>
    )
  }

}
