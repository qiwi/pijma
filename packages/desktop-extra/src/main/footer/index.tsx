import { Flex, styled } from '@qiwi/pijma-core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Spreader from '../spreader'

const Wrapper = styled(Spreader)`
  margin-top: 75px;
  color: #4a4a4a;
  margin-bottom: 50px;
  color: #4a4a4a;
`

const References = styled('a')`
  cursor: pointer;
  text-decoration: none;
  color: #4a4a4a;
  :hover {
    color: ${(props) => props.theme.color.gray.dark};
  }
`

interface FooterProps {
  email: string
}

function setLang(lng: string) {
  localStorage.setItem('i18nextLng', lng)
}

const Footer = ({ email }: FooterProps) => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.replace(/(\w+).*/, '$1')
  return (
    <Wrapper>
      <Flex p={0} m={0} justify="space-between">
        <div>
          © {new Date().getFullYear()}, {t('footer:qiwi')} № 2241
        </div>
        <References href={email || '/#'}>{t('footer:support')}</References>
      </Flex>
      <Flex p={0} m={0} justify="space-between">
        <span>&nbsp;</span>
        <span>
          {lang === 'ru' ? (
            <span>РУС</span>
          ) : (
            <a
              style={{ paddingLeft: 0 }}
              id="switch-ru"
              href={location.href}
              onClick={() => setLang('ru')}
            >
              РУС
            </a>
          )}{' '}
          /{' '}
          {lang === 'en' ? (
            <span>EN</span>
          ) : (
            <a
              style={{ paddingLeft: 0 }}
              id="switch-en"
              href={location.href}
              onClick={() => setLang('en')}
            >
              EN
            </a>
          )}
        </span>
      </Flex>
    </Wrapper>
  )
}

export { Footer }
