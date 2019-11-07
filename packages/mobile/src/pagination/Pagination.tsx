import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, Icon, Flex, FlexItem, Stub} from '@qiwi/pijma-core'

import {Text} from '../typography'
import {PaginationLink} from './PaginationLink'

export interface PaginationProps {
  total: number
  active: number
  count?: number
  shadowed?: boolean
  href?: (page: number) => string
  stub?: boolean
  onChange?: (index: number) => void
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  total,
  count = 3,
  shadowed = false,
  active,
  href,
  stub,
  onChange,
}) => (
  stub ? (
    <Card
      bg="#fff"
      s={shadowed ? '0 1px 2px 0 rgba(0,0,0,0.12)' : '0 0 0 1px #e6e6e6'}
      r={10}
      overflow="hidden"
      display="inline-block"
      height={12}
    >
      <Flex height={1}>
        {[12, 12, 12, 12, 12].map((width, index) => (
          <FlexItem
            key={index}
            width={width}
          >
            <Card
              s="1px 0 0 #e6e6e6"
              height={1}
            >
              <Stub
                height={6}
                width={6}
                top={3}
                left={3}
                r={12}
              />
            </Card>
          </FlexItem>
        ))}
      </Flex>
    </Card>
  ) : (
    <PaginationControl
      total={total}
      count={count}
      active={active}
      href={href}
      onChange={onChange}
      children={renderProps => (
        <Card
          bg="#fff"
          s={shadowed ? '0 1px 2px 0 rgba(0,0,0,0.12)' : '0 0 0 1px #e6e6e6'}
          height={12}
          display="inline-flex"
          r={10}
          overflow="hidden"
        >
          <PaginationLink
            page={renderProps.prev}
            disabled={renderProps.active === 1}
            href={href ? href(renderProps.prev) : undefined}
            onClick={renderProps.onPageClick(renderProps.prev, renderProps.active === 1)}
            children={({disabled}) => (
              <Icon name="angle-small-left" color={disabled ? '#ccc' : '#000'}/>
            )}
          />
          {renderProps.pages.map(page => (
            <PaginationLink
              key={page}
              page={page}
              disabled={false}
              href={href ? href(page) : undefined}
              onClick={renderProps.onPageClick(page, false)}
              children={() => (
                <Text
                  bold={false}
                  size="m"
                  color={renderProps.active === page ? 'warning' : 'default'}
                  children={page}
                />
              )}
            />
          ))}
          <PaginationLink
            page={renderProps.next}
            disabled={renderProps.active === renderProps.total}
            href={href ? href(renderProps.next) : undefined}
            onClick={renderProps.onPageClick(renderProps.next, renderProps.active === renderProps.total)}
            children={({disabled}) => (
              <Icon name="angle-small-right" color={disabled ? '#ccc' : '#000'}/>
            )}
          />
        </Card>
      )}
    />
  )

)

Pagination.defaultProps = {
  shadowed: false,
  count: 3,
  stub: true,
}
