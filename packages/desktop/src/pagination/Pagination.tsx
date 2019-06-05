import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, IconWrapper} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'
import {PaginationLink} from './PaginationLink'

export interface PaginationProps {
  total: number
  active: number
  count?: number
  outsided?: boolean
  onChange?: (index: number) => void
}

const shadowedStyle: string = '0 1px 2px 0 rgba(0, 0, 0, 0.12)'
const borderedStyle: string = '0 0 0 1px #e6e6e6'

export const Pagination: FunctionComponent<PaginationProps> = ({
  total,
  count = 5,
  active,
  onChange,
  outsided = true,
}) => (
  <PaginationControl
    total={total}
    count={count}
    active={active}
    children={renderProps => (
      <Card
        bg="#fff"
        s={outsided ? shadowedStyle : borderedStyle}
        height={12}
        display="inline-flex"
        r={10}
      >
        <PaginationLink
          pageNumber={1}
          disabled={renderProps.pages.includes(1)}
          height={12}
          width={18}
          boxWidth={5}
          boxHeight={5}
          s="1px 0 0 #e6e6e6"
          onClick={onChange}
          children={({disabled}) => (
            <IconWrapper color={disabled ? '#ccc' : '#000'}>
              <Icon name="angle-double-left-small" />
            </IconWrapper>
          )}
        />
        <PaginationLink
          pageNumber={renderProps.previousPage}
          disabled={renderProps.pages.includes(1)}
          height={12}
          width={12}
          boxWidth={5}
          boxHeight={5}
          s="1px 0 0 #e6e6e6"
          onClick={onChange}
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
            onClick={onChange}
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
          onClick={onChange}
          children={({disabled}) => (
            <IconWrapper color={disabled ? '#ccc' : '#000'}>
              <Icon name="angle-small-right" />
            </IconWrapper>
          )}
        />
        <PaginationLink
          pageNumber={renderProps.totalPages}
          disabled={renderProps.pages.includes(renderProps.totalPages)}
          height={12}
          width={18}
          boxWidth={5}
          boxHeight={5}
          onClick={onChange}
          children={({disabled}) => (
            <IconWrapper color={disabled ? '#ccc' : '#000'}>
              <Icon name="angle-double-right-small" />
            </IconWrapper>
          )}
        />
      </Card>
    )}
  />
)

Pagination.defaultProps = {
  count: 5,
  outsided: true,
}
