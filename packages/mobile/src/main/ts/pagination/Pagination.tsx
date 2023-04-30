import React, { FC } from 'react'

import { Card, Icon, PaginationControl } from '@qiwi/pijma-core'

import { Text } from '../typography'
import { PaginationLink } from './PaginationLink'

export interface PaginationProps {
  total: number
  active: number
  count?: number
  shadowed?: boolean
  href?: (page: number) => string
  stub?: boolean
  onChange?: (index: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  total,
  count = 3,
  shadowed = false,
  active,
  href,
  stub = false,
  onChange,
}) => (
  <PaginationControl
    total={total}
    count={count}
    active={active}
    href={href}
    onChange={onChange}
    children={(renderProps) => (
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
          stub={stub}
          onClick={renderProps.onPageClick(
            renderProps.prev,
            renderProps.active === 1,
          )}
          children={({ disabled }) => (
            <Icon name="angle-small-left" color={disabled ? '#ccc' : '#000'} />
          )}
        />
        {renderProps.pages.map((page) => (
          <PaginationLink
            key={page}
            page={page}
            disabled={false}
            href={href ? href(page) : undefined}
            stub={stub}
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
          stub={stub}
          onClick={renderProps.onPageClick(
            renderProps.next,
            renderProps.active === renderProps.total,
          )}
          children={({ disabled }) => (
            <Icon name="angle-small-right" color={disabled ? '#ccc' : '#000'} />
          )}
        />
      </Card>
    )}
  />
)

Pagination.displayName = 'Pagination'

Pagination.defaultProps = {
  shadowed: false,
  count: 3,
  stub: false,
}
