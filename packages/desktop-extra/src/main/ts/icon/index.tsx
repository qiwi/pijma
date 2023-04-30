import React, { Component, Fragment } from 'react'

import {
  Icon as PijmaIcon,
  IconProps as PijmaIconProps,
  styled,
} from '@qiwi/pijma-core'

import IconProps from './IconProps'

const IconSizeWrapper = styled('div')<{
  h?: number
  w?: number
}>`
  width: ${(props: any) => (props.w ? props.w : '24')}px;
  height: ${(props: any) => (props.h ? props.h : '24')}px;
  float: left;
  display: inline-block;
`

export class B2bIcon extends Component<IconProps> {
  render() {
    const { icon, iconColor, h, w } = this.props

    return (
      <Fragment>
        {typeof icon === 'string' ? (
          <IconSizeWrapper h={h} w={w}>
            <PijmaIcon
              name={icon as PijmaIconProps['name']}
              color={iconColor}
            />
          </IconSizeWrapper>
        ) : (
          icon
        )}
      </Fragment>
    )
  }
}
