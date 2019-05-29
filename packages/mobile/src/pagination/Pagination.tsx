import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, Box, IconWrapper} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'
import {PageLink} from './PageLink'

export interface PaginationProps {
  total: number
  active: number
  count?: number
  type?: 'bordered' | 'shadowed'
  onChange?: (index: number) => void
}

const PaginationType: {
  [type in NonNullable<PaginationProps['type']>]: string
} = {
  shadowed: '0 1px 2px 0 rgba(0, 0, 0, 0.12)',
  bordered: '0 0 0 1px #e6e6e6',
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  total,
  count = 5,
  active,
  onChange,
  type = 'shadowed',
}) => (
  <PaginationControl
    total={total}
    count={count}
    active={active}
    children={renderProps => (
      <Card
        bg="#fff"
        s={PaginationType[type]}
        height={12}
        display="inline-flex"
        r={10}
      >
        <PageLink
          pageNumber={1}
          disabled={renderProps.pages.includes(1)}
          height={12}
          width={18}
          s="1px 0 0 #e6e6e6"
          onClick={onChange}
          children={({disabled}) => (
            <Box m="auto" width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-double-left" />
              </IconWrapper>
            </Box>
          )}
        />
        <PageLink
          pageNumber={renderProps.previousPage}
          disabled={renderProps.pages.includes(1)}
          height={12}
          width={12}
          s="1px 0 0 #e6e6e6"
          onClick={onChange}
          children={({disabled}) => (
            <Box m="auto" width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-left" />
              </IconWrapper>
            </Box>
          )}
        />
        {renderProps.pages.map(pageNumber => (
          <PageLink
            key={pageNumber}
            pageNumber={pageNumber}
            height={12}
            width={12}
            s="1px 0 0 #e6e6e6"
            onClick={onChange}
            children={() => (
              <Box m="auto">
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
              </Box>
            )}
          />
        ))}
        <PageLink
          pageNumber={renderProps.nextPage}
          disabled={renderProps.pages.includes(renderProps.totalPages)}
          height={12}
          width={12}
          s="1px 0 0 #e6e6e6"
          onClick={onChange}
          children={({disabled}) => (
            <Box m="auto" width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-right" />
              </IconWrapper>
            </Box>
          )}
        />
        <PageLink
          pageNumber={renderProps.totalPages}
          disabled={renderProps.pages.includes(renderProps.totalPages)}
          height={12}
          width={18}
          onClick={onChange}
          children={({disabled}) => (
            <Box m="auto" width={5} height={5}>
              <IconWrapper color={disabled ? '#ccc' : '#000'}>
                <Icon name="angle-double-right" />
              </IconWrapper>
            </Box>
          )}
        />
      </Card>
    )}
  />
)

Pagination.defaultProps = {
  type: 'shadowed',
  count: 5,
}
