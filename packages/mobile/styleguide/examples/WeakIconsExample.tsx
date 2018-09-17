import React, {Component, Fragment} from 'react'

import {styled, IconWrapper} from '@qiwi/pijma-core'
import {IconName, WeakIcon} from '@qiwi/pijma-media'

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
  columnCount: 2,
  columnGap: '40px',
})

const BasicIconWrapper = styled.span({
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

const ColoringWrapper: React.SFC = (props) => (
  <BasicIconWrapper>
    <IconWrapper color="red">
      {props.children}
    </IconWrapper>
  </BasicIconWrapper>
)

const iconNames: IconName[] = ['angle-right',
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
  'arrow-small-right',
  'arrow-small-left',
  'arrow-small-up',
  'arrow-small-down',
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
  'receipt',
  'repeat',
  'refund',
  'search',
  'send',
  'settings',
  'share',
  'star',
  'terminal',
  'terminal-client',
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

const coloredIcons: IconName[] = [
  'bank',
  'file',
  'star',
  'qiwi',
]

export default class WeakIconExample extends Component {

  public render() {
    return (
      <Fragment>
        {this.renderSection('Basic 24 × 24', iconNames, BasicIconWrapper)}
        {this.renderSection('Payment systems 24 × 48', paysysIcons, PaysysIconWrapper)}
        {this.renderSection('Social networks 24 × 24', socialIcons, BasicIconWrapper)}
        {this.renderSection('Security badges 24 × 64', securityIcons, SecurityIconWrapper)}
        {this.renderSection('Colored 24 × 24', coloredIcons, ColoringWrapper)}
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
                <WeakIcon name={name}/>
              </Wrapper>
              <Name>{name}</Name>
            </div>
          ))}
        </Columns>
      </Fragment>
    )
  }

}
