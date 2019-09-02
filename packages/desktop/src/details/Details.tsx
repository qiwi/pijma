import React, {FC, ReactElement} from 'react'
import {Box, Pos, Value} from '@qiwi/pijma-core'
import {Text} from '../typography'

export interface DetailsProps {
  children: {title?: ReactElement | string, content: ReactElement | string}[]
  dots?: boolean
  titleWidth?: Value
  contentWidth?: Value
  size?: 's' | 'm' | 'l'
}

const indentDots: { [size in NonNullable<DetailsProps['size']>]: string } = {
  s: '6px',
  m: '8px',
  l: '8px',
}

const bottomDots: { [size in NonNullable<DetailsProps['size']>]: string } = {
  s: '5px',
  m: '7px',
  l: '9px',
}

export const Details: FC<DetailsProps> = ({children, dots, titleWidth, contentWidth, size = 'm'}) => (
  !dots ? (
    <Box as="dl" width="100%" display="table">
      {children.map((item, i) => (
        <Box css={{display: 'table-row'}} key={i}>
          <Box
            as="dt"
            width={titleWidth ? titleWidth : undefined}
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
          >
            {typeof item.title === 'string' ? (
              <Text
                bold={false}
                size={size}
                color="support"
                children={item.title}
              />
            ) : (
              item.title
            )}
          </Box>
          <Box
            as="dd"
            width={contentWidth ? contentWidth : undefined}
            pl={4}
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
          >
            {typeof item.content === 'string' ? (
              <Text
                bold={false}
                size={size}
                children={item.content}
              />
            ) : (
              item.content
            )}
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
    <Box as="dl" width="100%" display="table">
      {children.map((item, i) => (
        <Box css={{display: 'table-row'}} key={i}>
          <Box
            as="dt"
            width={titleWidth ? titleWidth : undefined}
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
          >
            {item.title ? (
              <Pos
                type="relative"
                overflow="hidden"
                css={{
                  ':after': {
                    content: '""',
                    position: 'absolute',
                    bottom: bottomDots[size],
                    borderBottom: 'dashed 1px #e6e6e6',
                    width: '100%',
                    marginLeft: indentDots[size],
                  },
                }}
              >
                {typeof item.title === 'string' ? (
                  <Text
                    bold={false}
                    size={size}
                    color="support"
                    children={item.title}
                  />
                ) : (
                  item.title
                )}
              </Pos>
            ) : (
              null
            )}
          </Box>
          <Box
            as="dd"
            width={contentWidth ? contentWidth : undefined}
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
            pl={indentDots[size]}
          >
            {typeof item.content === 'string' ? (
              <Text
                bold={false}
                size={size}
                children={item.content}
              />
            ) : (
              item.content
            )}
          </Box>
        </Box>
      ))}
    </Box>
  )
)
