import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, IconWrapper, Box, Block} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'
import {BlockPaginationLink} from './BlockPaginationLink'

export interface BlockPaginationProps {
  total: number
  active: number
  count?: number
  href?: (page: number) => string
  onChange?: (index: number) => void
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
}

export const BlockPagination: FunctionComponent<BlockPaginationProps> = ({
  total,
  count = 5,
  active,
  href,
  onChange,
  onClick,
}) => (
  <Box display="inline-block">
    <Block>
      <PaginationControl
        total={total}
        count={count}
        active={active}
        children={renderProps => (
          <Card
            bg="#fff"
            height={12}
            display="inline-flex"
            r={10}
            overflow="hidden"
          >
            <BlockPaginationLink
              pageNumber={1}
              disabled={renderProps.pages.includes(1)}
              height={12}
              width={18}
              boxWidth={5}
              boxHeight={5}
              s="1px 0 0 #e6e6e6"
              sHover="0px -1px 0 1px #e6e6e6"
              mtHover="1px"
              href={href}
              onChange={onChange}
              onClick={onClick}
              children={({disabled}) => (
                <IconWrapper color={disabled ? '#ccc' : '#000'}>
                  <Icon name="angle-double-left-small" />
                </IconWrapper>
              )}
            />
            <BlockPaginationLink
              pageNumber={renderProps.previousPage}
              disabled={renderProps.pages.includes(1)}
              height={12}
              width={12}
              boxWidth={5}
              boxHeight={5}
              s="1px 0 0 #e6e6e6"
              sHover="0px -1px 0 1px #e6e6e6"
              ml="1px"
              mtHover="1px"
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
              <BlockPaginationLink
                key={pageNumber}
                pageNumber={pageNumber}
                height={12}
                width={12}
                s="1px 0 0 #e6e6e6"
                sHover="0px -1px 0 1px #e6e6e6"
                ml="1px"
                mtHover="1px"
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
            <BlockPaginationLink
              pageNumber={renderProps.nextPage}
              disabled={renderProps.pages.includes(renderProps.totalPages)}
              height={12}
              width={12}
              boxWidth={5}
              boxHeight={5}
              s="1px 0 0 #e6e6e6"
              sHover="0px -1px 0 1px #e6e6e6"
              ml="1px"
              mtHover="1px"
              href={href}
              onChange={onChange}
              onClick={onClick}
              children={({disabled}) => (
                <IconWrapper color={disabled ? '#ccc' : '#000'}>
                  <Icon name="angle-small-right" />
                </IconWrapper>
              )}
            />
            <BlockPaginationLink
              pageNumber={renderProps.totalPages}
              disabled={renderProps.pages.includes(renderProps.totalPages)}
              height={12}
              width={18}
              boxWidth={5}
              boxHeight={5}
              sHover="0px -1px 0 1px #e6e6e6"
              ml="1px"
              mtHover="1px"
              href={href}
              onChange={onChange}
              onClick={onClick}
              children={({disabled}) => (
                <IconWrapper color={disabled ? '#ccc' : '#000'}>
                  <Icon name="angle-double-right-small" />
                </IconWrapper>
              )}
            />
          </Card>
        )}
      />
    </Block>
  </Box>
)

BlockPagination.defaultProps = {
  count: 5,
}
