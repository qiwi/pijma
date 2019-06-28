import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, IconWrapper, Box} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'
import {PaginationLink} from './PaginationLink'

export interface PaginationProps {
  total: number
  active: number
  count?: number
  href?: (page: number) => string
  onChange?: (index: number) => void
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  total,
  count = 3,
  active,
  href,
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
        s="0 0 0 1px #e6e6e6"
        height={12}
        display="inline-flex"
        r={10}
        overflow="hidden"
      >
        <PaginationLink
          page={renderProps.prev}
          disabled={renderProps.pages.includes(1)}
          href={href ? href(renderProps.prev) : undefined}
          onClick={renderProps.onPageClick(renderProps.prev, renderProps.pages.includes(1))}
          children={({disabled}) => (
            <Box width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-small-left" />
              </IconWrapper>
            </Box>
          )}
        />
        {renderProps.pages.map(page => (
          <PaginationLink
            key={page}
            page={page}
            disabled={false}
            href={href ? href(page) : undefined}
            onClick={renderProps.onPageClick(page)}
            children={() => (
              <Text
                bold={false}
                size="m"
                color={renderProps.active === page ? 'warning' : 'default'}
              >
                {page}
              </Text>
            )}
          />
        ))}
        <PaginationLink
          page={renderProps.next}
          disabled={renderProps.pages.includes(renderProps.total)}
          href={href ? href(renderProps.next) : undefined}
          onClick={renderProps.onPageClick(renderProps.next, renderProps.pages.includes(renderProps.total))}
          children={({disabled}) => (
            <Box width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-small-right" />
              </IconWrapper>
            </Box>
          )}
        />
      </Card>
    )}
  />
)

Pagination.defaultProps = {
  count: 3,
}
