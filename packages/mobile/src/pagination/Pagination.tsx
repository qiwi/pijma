import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, IconWrapper} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'
import {PaginationLink} from './PaginationLink'

export interface PaginationProps {
  total: number
  active: number
  count?: number
  href?: (page: number) => string
  onChange?: (index: number) => void
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  total,
  count = 3,
  active,
  href,
  onChange,
  onClick,
}) => (
  <PaginationControl
    total={total}
    count={count}
    active={active}
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
          pageNumber={renderProps.previousPage}
          disabled={renderProps.pages.includes(1)}
          height={12}
          width={12}
          boxWidth={5}
          boxHeight={5}
          s="1px 0 0 #e6e6e6"
          href={href}
          onChange={onChange}
          onClick={onClick}
          children={({disabled}) => (
            <IconWrapper color={disabled ? '#ccc' : '#000'}>
              <Icon name="angle-small-left" />
            </IconWrapper>
          )}
        />
        {renderProps.pages.map(pageNumber => (
          <PaginationLink
            key={pageNumber}
            pageNumber={pageNumber}
            height={12}
            width={12}
            s="1px 0 0 #e6e6e6"
            href={href}
            onChange={onChange}
            onClick={onClick}
            children={() => (
              <Text
                bold={false}
                size="m"
                color={
                  renderProps.currentPage === pageNumber
                    ? 'warning'
                    : 'default'
                }
              >
                {pageNumber}
              </Text>
            )}
          />
        ))}
        <PaginationLink
          pageNumber={renderProps.nextPage}
          disabled={renderProps.pages.includes(renderProps.totalPages)}
          height={12}
          width={12}
          boxWidth={5}
          boxHeight={5}
          s="1px 0 0 #e6e6e6"
          href={href}
          onChange={onChange}
          onClick={onClick}
          children={({disabled}) => (
            <IconWrapper color={disabled ? '#ccc' : '#000'}>
              <Icon name="angle-small-right" />
            </IconWrapper>
          )}
        />
      </Card>
    )}
  />
)

Pagination.defaultProps = {
  count: 3,
}
