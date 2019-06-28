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
}

export const BlockPagination: FunctionComponent<BlockPaginationProps> = ({
  total,
  count = 5,
  active,
  href,
  onChange,
}) => (
  <Box display="inline-block">
    <Block>
      <PaginationControl
        total={total}
        count={count}
        active={active}
        href={href}
        onChange={onChange}
        children={renderProps => (
          <Card
            bg="#fff"
            height={12}
            display="inline-flex"
            r={10}
            overflow="hidden"
          >
            <BlockPaginationLink
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
            <BlockPaginationLink
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
              <BlockPaginationLink
                key={page}
                page={page}
                disabled={false}
                href={href ? href(page) : undefined}
                onClick={renderProps.onPageClick(page, false)}
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
            <BlockPaginationLink
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
            <BlockPaginationLink
              page={renderProps.total}
              disabled={renderProps.pages.includes(renderProps.total)}
              width={18}
              href={href ? href(renderProps.total) : undefined}
              onClick={renderProps.onPageClick(renderProps.total, renderProps.pages.includes(renderProps.total))}
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
    </Block>
  </Box>
)

BlockPagination.defaultProps = {
  count: 5,
}
