import { Flex, FlexItem, styled } from '@qiwi/pijma-core'
import { HeaderMenu } from '@qiwi/pijma-desktop'
import React, { Component } from 'react'

import { Logo } from '../logo'
import { Product } from '../product'
import { B2bSpinner } from '../spinner'
import { COLOR, DIMEN } from '../theme'
import { UserProfile } from '../user-profile'
import HeaderProps from './HeaderProps'

const HeaderContainer = styled('header')`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  height: 80px;
  padding: 0;
  margin: 0 auto;
  color: ${COLOR.TEXT.Secondary2};
  background: ${COLOR.BACKGROUND.Primary};
  font-size: 11pt;
`

const HeaderContent = styled('div')`
  width: ${DIMEN.SITE_WIDTH};
  margin: 0 auto;
  height: 100%;
`

export class Header extends Component<HeaderProps> {
  render() {
    const {
      isLoading,
      title,
      selectorData,
      navItems,
      userName,
      onItemChange,
      onLogout,
    } = this.props

    const menuItems = navItems.map(({ name, path }) => {
      const href = typeof path === 'string' ? path : path.value
      return {
        href,
        title: name,
        active: location.pathname === path,
        onClick: () => {
          window.location.href = href
        },
      }
    })

    return (
      <HeaderContainer>
        <HeaderContent>
          {isLoading ? (
            <Flex justify="center" align="center" css={{ height: '100%' }}>
              <B2bSpinner />
            </Flex>
          ) : (
            <Flex p={0} m={0} justify="space-between" align="center">
              <Flex align="center">
                <FlexItem mr={10}>
                  {/* TODO: move to nav controller */}
                  <a
                    href={`http://${window.location.host}/service/core/merchants`}
                  >
                    <Logo />
                  </a>
                </FlexItem>
                <Product
                  title={title}
                  selectorData={selectorData}
                  onChange={onItemChange}
                />
                <FlexItem ml={10} p={0} height={20}>
                  <HeaderMenu children={menuItems} />
                </FlexItem>
              </Flex>
              <FlexItem m={0} p={0}>
                <UserProfile onClick={onLogout} userName={userName} />
              </FlexItem>
            </Flex>
          )}
        </HeaderContent>
      </HeaderContainer>
    )
  }
}
