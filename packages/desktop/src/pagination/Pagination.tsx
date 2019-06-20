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
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  total,
  count = 5,
  active,
  href,
  onChange,
  onClick,
}) => (
  <PaginationControl
    total={total}
    count={count}
    active={active}
    href={href}
    onChange={onChange}
    onClick={onClick}
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
          page={1}
          disabled={renderProps.pages.includes(1)}
          width={18}
          href={href ? href(1) : undefined}
          onClick={renderProps.onPageClick(1, renderProps.pages.includes(1))}
          children={({disabled}) => (
            <Box width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-double-left-small" />
              </IconWrapper>
            </Box>
          )}
        />
        <PaginationLink
          page={renderProps.previousPage}
          disabled={renderProps.pages.includes(1)}
          href={href ? href(renderProps.previousPage) : undefined}
          onClick={renderProps.onPageClick(renderProps.previousPage, renderProps.pages.includes(1))}
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
            href={href ? href(page) : undefined}
            onClick={renderProps.onPageClick(page)}
            children={() => (
              <Text
                bold={false}
                size="m"
                color={renderProps.currentPage === page ? 'warning' : 'default'}
              >
                {page}
              </Text>
            )}
          />
        ))}
        <PaginationLink
          page={renderProps.nextPage}
          disabled={renderProps.pages.includes(renderProps.totalPages)}
          href={href ? href(renderProps.nextPage) : undefined}
          onClick={renderProps.onPageClick(renderProps.nextPage, renderProps.pages.includes(renderProps.totalPages))}
          children={({disabled}) => (
            <Box width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-small-right" />
              </IconWrapper>
            </Box>
          )}
        />
        <PaginationLink
          page={renderProps.totalPages}
          disabled={renderProps.pages.includes(renderProps.totalPages)}
          width={18}
          href={href ? href(renderProps.totalPages) : undefined}
          onClick={renderProps.onPageClick(renderProps.totalPages, renderProps.pages.includes(renderProps.totalPages))}
          children={({disabled}) => (
            <Box width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-double-right-small" />
              </IconWrapper>
            </Box>
          )}
        />
      </Card>
    )}
  />
)

Pagination.defaultProps = {
  count: 5,
}
