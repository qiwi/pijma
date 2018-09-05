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
  'angle-right',
  'angle-left',
  'angle-up',
  'angle-down',
  'angle-small-right',
  'angle-small-left',
  'angle-small-up',
  'angle-small-down',
  'arrow-right',
  'arrow-left',
  'arrow-up',
  'arrow-down',
  'bank',
  'calendar',
  'card',
  'check',
  'clock',
  'cross',
  'dots-h',
  'dots-v',
  'download',
  'envelope',
  'eye-closed',
  'eye-opened',
  'file',
  'filter',
  'filter-active',
  'hamburger',
  'location',
  'login',
  'logout',
  'mobile',
  'passport',
  'phone',
  'percent',
  'play',
  'plus',
  'power',
  'print',
  'qiwi',
  'question',
  'repeat',
  'search',
  'settings',
  'share',
  'star',
  'terminal',
  'terminal-client',
  'receipt',
  'user',
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
