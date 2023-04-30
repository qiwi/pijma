import React, { Component } from 'react'

import { Flex, Icon, styled } from '@qiwi/pijma-core'

import UserProfileProps from './UserProfileProps'

const IconWrapper = styled('div')`
  width: 24px;
  height: 24px;
  float: left;
  margin-left: 20px;
  cursor: pointer;
`
const ProfileWrapper = styled('div')``

const Username = styled('div')``

export class UserProfile extends Component<UserProfileProps> {
  render() {
    const { onClick, userName } = this.props
    return (
      <ProfileWrapper>
        <Flex>
          <Username>{userName}</Username>
          <IconWrapper onClick={onClick}>
            <Icon name="logout" />
          </IconWrapper>
        </Flex>
      </ProfileWrapper>
    )
  }
}
