import React, { Component } from 'react'

import { Flex, FlexItem, styled } from '@qiwi/pijma-core'

import { B2bIcon } from '../icon'
import ErrorMessageProps from './ErrorMessageProps'

const ErrorMessageTitle = styled('div')`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.15;
  margin-bottom: 8px;
`

const ErrorMessageText = styled('div')`
  font-size: 16px;
  font-weight: 300;
`

export class ErrorMessage extends Component<ErrorMessageProps> {
  render() {
    const { message, title, icon, iconColor } = this.props

    return (
      <Flex mt={4}>
        <FlexItem mr={3}>
          {icon ? <B2bIcon icon={icon} iconColor={iconColor} /> : null}
        </FlexItem>
        <FlexItem>
          {title ? <ErrorMessageTitle>{title}</ErrorMessageTitle> : null}
          <ErrorMessageText>{message}</ErrorMessageText>
        </FlexItem>
      </Flex>
    )
  }
}
