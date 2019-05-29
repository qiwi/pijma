import React, {FunctionComponent} from 'react'

import {PaginationControl, PageControl, Card, Box, Flex} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'

export interface PaginationProps {
  totalPages: number
  pageRangeDisplayed: number
  activePage: number
  onChange?: (index: number) => void
  type?: 'bordered' | 'shadowed'
}

const PaginationType: {
  [type in NonNullable<PaginationProps['type']>]: string
} = {
  shadowed: '0 1px 2px 0 rgba(0, 0, 0, 0.12)',
  bordered: '0 0 0 1px #e6e6e6',
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  totalPages,
  pageRangeDisplayed,
  activePage,
  onChange,
  type = 'shadowed',
}) => (
  <PaginationControl
    totalPages={totalPages}
    pageRangeDisplayed={pageRangeDisplayed}
    activePage={activePage}
    children={renderProps => (
      <Flex>
        <Card
          bg="#fff"
          s={PaginationType[type]}
          height={12}
          display="inline-flex"
          r={10}
          onMouseLeave={renderProps.onMouseLeave}
        >
          <PageControl
            pageNumber={1}
            hovered={renderProps.hovered}
            disabled={renderProps.currentPage === 1}
            id="start"
            onClick={onChange}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={12}
                width={18}
                display="inline-flex"
                cursor={renderPageProps.disabled ? 'default' : 'pointer'}
                bg={
                  renderPageProps.hovered && !renderPageProps.disabled
                    ? '#f5f5f5'
                    : undefined
                }
                s="1px 0 0 #e6e6e6"
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
              >
                <Box
                  m="auto"
                  width={5}
                  height={5}
                  css={{fill: renderPageProps.disabled ? '#ccc' : '#000'}}
                >
                  <Icon name="angle-double-left" />
                </Box>
              </Card>
            )}
          />
          <PageControl
            pageNumber={renderProps.previousPage}
            hovered={renderProps.hovered}
            disabled={!renderProps.hasPreviousPage}
            id="prev"
            onClick={onChange}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={12}
                width={12}
                display="inline-flex"
                cursor={renderPageProps.disabled ? 'default' : 'pointer'}
                bg={
                  renderPageProps.hovered && !renderPageProps.disabled
                    ? '#f5f5f5'
                    : undefined
                }
                s="1px 0 0 #e6e6e6"
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
              >
                <Box
                  m="auto"
                  width={5}
                  height={5}
                  css={{fill: renderPageProps.disabled ? '#ccc' : '#000'}}
                >
                  <Icon name="angle-left" />
                </Box>
              </Card>
            )}
          />
          {renderProps.pages.map((pageNumber, index) => (
            <PageControl
              key={pageNumber}
              pageNumber={pageNumber}
              hovered={renderProps.hovered}
              id={`page_${index}`}
              onClick={onChange}
              onMouseEnter={renderProps.onMouseEnter}
              children={renderPageProps => (
                <Card
                  height={12}
                  width={12}
                  display="inline-flex"
                  cursor="pointer"
                  bg={renderPageProps.hovered ? '#f5f5f5' : undefined}
                  s="1px 0 0 #e6e6e6"
                  onMouseEnter={renderPageProps.onMouseEnter}
                  onClick={renderPageProps.onClick}
                >
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
                </Card>
              )}
            />
          ))}
          <PageControl
            pageNumber={renderProps.nextPage}
            hovered={renderProps.hovered}
            disabled={!renderProps.hasNextPage}
            id="next"
            onClick={onChange}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={12}
                width={12}
                display="inline-flex"
                cursor={renderPageProps.disabled ? 'default' : 'pointer'}
                bg={
                  renderPageProps.hovered && !renderPageProps.disabled
                    ? '#f5f5f5'
                    : undefined
                }
                s="1px 0 0 #e6e6e6"
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
              >
                <Box
                  m="auto"
                  width={5}
                  height={5}
                  css={{fill: renderPageProps.disabled ? '#ccc' : '#000'}}
                >
                  <Icon name="angle-right" />
                </Box>
              </Card>
            )}
          />
          <PageControl
            pageNumber={renderProps.totalPages}
            hovered={renderProps.hovered}
            disabled={renderProps.currentPage === renderProps.totalPages}
            id="end"
            onClick={onChange}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={12}
                width={18}
                display="inline-flex"
                cursor={renderPageProps.disabled ? 'default' : 'pointer'}
                bg={
                  renderPageProps.hovered && !renderPageProps.disabled
                    ? '#f5f5f5'
                    : undefined
                }
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
              >
                <Box
                  m="auto"
                  width={5}
                  height={5}
                  css={{fill: renderPageProps.disabled ? '#ccc' : '#000'}}
                >
                  <Icon name="angle-double-right" />
                </Box>
              </Card>
            )}
          />
        </Card>
      </Flex>
    )}
  />
)

Pagination.defaultProps = {
  type: 'shadowed',
}
