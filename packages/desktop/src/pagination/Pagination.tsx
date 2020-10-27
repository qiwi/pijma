import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, Icon} from '@qiwi/pijma-core'

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
  count = 5,
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
          page={1}
          disabled={renderProps.active === 1}
          width={18}
          shadowed={shadowed}
          href={href ? href(1) : undefined}
          stub={stub}
          onClick={renderProps.onPageClick(1, renderProps.active === 1)}
          children={({disabled}) => (
            <Icon name="angle-double-left-small" color={disabled ? '#ccc' : '#000'}/>
          )}
        />
        <PaginationLink
          page={renderProps.prev}
          disabled={renderProps.active === 1}
          shadowed={shadowed}
          href={href ? href(renderProps.prev) : undefined}
          stub={stub}
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
            shadowed={shadowed}
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
          shadowed={shadowed}
          href={href ? href(renderProps.next) : undefined}
          stub={stub}
          onClick={renderProps.onPageClick(renderProps.next, renderProps.active === renderProps.total)}
          children={({disabled}) => (
            <Icon name="angle-small-right" color={disabled ? '#ccc' : '#000'}/>
          )}
        />
        <PaginationLink
          page={renderProps.total}
          disabled={renderProps.active === renderProps.total}
          width={18}
          shadowed={shadowed}
          href={href ? href(renderProps.total) : undefined}
          stub={stub}
          onClick={renderProps.onPageClick(renderProps.total, renderProps.active === renderProps.total)}
          children={({disabled}) => (
            <Icon name="angle-double-right-small" color={disabled ? '#ccc' : '#000'}/>
          )}
        />
      </Card>
    )}
  />
)

Pagination.defaultProps = {
  shadowed: false,
  count: 5,
  stub: false,
}

Pagination.displayName = 'Pagination'
