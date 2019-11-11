import React, {FC} from 'react'

import {LinkControl, Lnk, FlexItem, Flex, Icon, Stub} from '@qiwi/pijma-core'

import {Text} from '../typography'

export interface FileLinkProps {
  onClick?: (
    href?: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
  ) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  stub?: boolean
}

const FlexLink = Flex.withComponent(Lnk)

export const FileLink: FC<FileLinkProps> = (props) => (
  props.stub ? (
    <Flex>
      <FlexItem>
        <Stub
          height={6}
          width={6}
          r={12}
        />
      </FlexItem>
      <FlexItem>
        <Stub
          height={2}
          width={33}
          top={2}
          left={3}
        />
      </FlexItem>
    </Flex>
  ) : (
    <LinkControl
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      href={props.href}
      target={props.target}
      download={props.download}
      rel={props.rel}
      children={(renderProps) => (
        <FlexLink
          tabIndex={props.tabIndex}
          href={props.href}
          target={props.target}
          download={props.download}
          rel={props.rel}
          title={props.title}
          display="inline-flex"
          cursor="pointer"
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onClick={renderProps.onClick}
          onMouseEnter={renderProps.onMouseEnter}
          onMouseLeave={renderProps.onMouseLeave}
          onMouseUp={renderProps.onMouseUp}
          onMouseDown={renderProps.onMouseDown}
        >
          <FlexItem
            display="inline-block"
            width={6}
            height={6}
            mr={2}
            shrink={0}
          >
            <Icon name="file" color={renderProps.hover || renderProps.focus || renderProps.active ? '#FF8C00' : '#000'}/>
          </FlexItem>
          <FlexItem>
            <Text
              color={renderProps.hover || renderProps.focus || renderProps.active ? 'warning' : 'default'}
              decoration="none"
              size="m"
              bold={false}
              children={props.children}
            />
          </FlexItem>
        </FlexLink>
      )}
    />
  )
)

FileLink.defaultProps = {
  stub: false,
}
