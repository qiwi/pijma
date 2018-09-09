import React, {Component, Fragment} from 'react'

import {styled, Icon} from '@qiwi/pijma-core'
import {IconName} from '@qiwi/pijma-media'

const Heading = styled.span({
  display: 'block',
  fontSize: '120%',
  fontWeight: 700,
})

const Name = styled.span({
  display: 'inline-block',
  fontSize: '80%',
})

const Columns = styled.div({
  columnCount: 4,
  columnGap: '40px',
})

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

const SecurityIconWrapper = styled.span({
  display: 'inline-block',
  width: 64,
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
  'send',
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

const socialIcons: IconName[] = [
  'facebook',
  'instagram',
  'ok',
  'twitter',
  'vk',
  'youtube',
]

const securityIcons: IconName[] = [
  'pci-dss',
  'mir-accept',
  'visa-verified',
  'mcsc',
]

export default class IconsExample extends Component {

  public render() {
    return (
      <Fragment>
        {this.renderSection('Basic 24 × 24', iconNames, IconWrapper)}
        {this.renderSection('Payment systems 24 × 48', paysysIcons, PaysysIconWrapper)}
        {this.renderSection('Social networks 24 × 24', socialIcons, IconWrapper)}
        {this.renderSection('Security badges 24 × 64', securityIcons, SecurityIconWrapper)}
      </Fragment>
    )
  }

  private renderSection(title: string, collection: IconName[], Wrapper: any) {
    return (
      <Fragment>
        <Heading>{title}</Heading>
        <Columns>
          {collection.map(name => (
            <div key={name}>
              <Wrapper>
                <Icon name={name}/>
              </Wrapper>
              <Name>{name}</Name>
            </div>
          ))}
        </Columns>
      </Fragment>
    )
  }

}
