import React, {FunctionComponent} from 'react'

import {PaginationControl, PageControl, Card, Box} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'

export interface PaginationProps {
  totalItemsCount: number
  itemsCountPerPage: number
  pageRangeDisplayed: number
  activePage: number
  onClick?: (index: number) => void
  withStartButton?: boolean
}

export const Pagination: FunctionComponent<PaginationProps> = props => (
  <PaginationControl
    totalItemsCount={props.totalItemsCount}
    itemsCountPerPage={props.itemsCountPerPage}
    pageRangeDisplayed={props.pageRangeDisplayed}
    activePage={props.activePage}
    children={renderProps => (
      <Box>
        {props.withStartButton ? (
          <PageControl
            pageNumber={1}
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            hovered={renderProps.hovered}
            id={`start_button`}
            children={renderPageProps => (
              <Card
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
                height={12}
                width={27}
                display="inline-flex"
                cursor="pointer"
                bg={renderPageProps.hovered ? '#f5f5f5' : '#fff'}
                s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"
                mr={5}
                r="10px"
                onMouseLeave={renderProps.onMouseLeave}
              >
                <Box m="auto">
                  <Text bold={false} size="s">
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
          height={12}
          display="inline-flex"
          r="10px"
          onMouseLeave={renderProps.onMouseLeave}
        >
          <PageControl
            pageNumber={1}
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            hovered={renderProps.hovered}
            disabled={renderProps.currentPage === 1}
            id="start"
            children={renderPageProps => (
              <Card
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
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
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            hovered={renderProps.hovered}
            disabled={!renderProps.hasPreviousPage}
            id="prev"
            children={renderPageProps => (
              <Card
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
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
              onClick={props.onClick}
              onMouseEnter={renderProps.onMouseEnter}
              hovered={renderProps.hovered}
              id={`page_${index}`}
              children={renderPageProps => (
                <Card
                  onMouseEnter={renderPageProps.onMouseEnter}
                  onClick={renderPageProps.onClick}
                  height={12}
                  width={12}
                  display="inline-flex"
                  cursor="pointer"
                  bg={renderPageProps.hovered ? '#f5f5f5' : undefined}
                  s="1px 0 0 #e6e6e6"
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
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            hovered={renderProps.hovered}
            disabled={!renderProps.hasNextPage}
            id="next"
            children={renderPageProps => (
              <Card
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
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
            onClick={props.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            hovered={renderProps.hovered}
            disabled={renderProps.currentPage === renderProps.totalPages}
            id="end"
            children={renderPageProps => (
              <Card
                onMouseEnter={renderPageProps.onMouseEnter}
                onClick={renderPageProps.onClick}
                height={12}
                width={18}
                display="inline-flex"
                cursor={renderPageProps.disabled ? 'default' : 'pointer'}
                bg={
                  renderPageProps.hovered && !renderPageProps.disabled
                    ? '#f5f5f5'
                    : undefined
                }
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
      </Box>
    )}
  />
)
