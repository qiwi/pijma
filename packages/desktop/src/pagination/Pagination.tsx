import React, {FunctionComponent} from 'react'

import {PaginationControl, PageControl, Card, Box, Flex} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'

export interface PaginationProps {
  totalItemsCount: number
  itemsCountPerPage: number
  pageRangeDisplayed: number
  activePage: number
  withStartButton?: boolean
  onClick?: (index: number) => void
}

export const Pagination: FunctionComponent<PaginationProps> = props => (
  <PaginationControl
    totalItemsCount={props.totalItemsCount}
    itemsCountPerPage={props.itemsCountPerPage}
    pageRangeDisplayed={props.pageRangeDisplayed}
    activePage={props.activePage}
    children={renderProps => (
      <Flex>
        {props.withStartButton ? (
          <PageControl
            pageNumber={1}
            hovered={renderProps.hovered}
            id={`start_button`}
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={16}
                width={36}
                display="inline-flex"
                cursor="pointer"
                bg={renderPageProps.hovered ? '#f5f5f5' : '#fff'}
                s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"
                mr={6}
                r="10px"
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
                onMouseLeave={renderProps.onMouseLeave}
              >
                <Box m="auto">
                  <Text bold={false} size="m">
                    В начало
                  </Text>
                </Box>
              </Card>
            )}
          />
        ) : null}
        <Card
          bg="#fff"
          s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"
          height={16}
          display="inline-flex"
          r="10px"
          onMouseLeave={renderProps.onMouseLeave}
        >
          <PageControl
            pageNumber={1}
            hovered={renderProps.hovered}
            disabled={renderProps.currentPage === 1}
            id="start"
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={16}
                width={24}
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
                  width={6}
                  height={6}
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
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={16}
                width={16}
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
                  width={6}
                  height={6}
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
              onClick={props.onClick}
              onMouseEnter={renderProps.onMouseEnter}
              children={renderPageProps => (
                <Card
                  height={16}
                  width={16}
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
                      size="l"
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
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={16}
                width={16}
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
                  width={6}
                  height={6}
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
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            children={renderPageProps => (
              <Card
                height={16}
                width={24}
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
                  width={6}
                  height={6}
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
