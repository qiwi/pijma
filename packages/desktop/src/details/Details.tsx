import React, {FC, ReactElement} from 'react'
import {Box, Pos, Value} from '@qiwi/pijma-core'
import {Text} from '../typography'

export interface DetailsProps {
  children: {title?: ReactElement | string, content: ReactElement | string}[]
  dots?: boolean
  titleWidth?: Value
  contentWidth?: Value
}

export const Details: FC<DetailsProps> = ({children, dots, titleWidth, contentWidth}) => (
  !dots ? (
    <Box width="100%" display="table">
      {children.map((item, i) => (
        <Box css={{display: 'table-row'}} key={i}>
          <Box
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
                size="m"
                color="support"
                children={item.title}
              />
            ) : (
              item.title
            )}
          </Box>
          <Box
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
                size="m"
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
    <Box width="100%" display="table">
      {children.map((item, i) => (
        <Box css={{display: 'table-row'}} key={i}>
          <Box
            width={titleWidth ? titleWidth : undefined}
            pt={i !== 0 ? 3 : undefined}
            minWidth={50}
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
                    bottom: '7px',
                    borderBottom: 'dashed 1px #e6e6e6',
                    width: '100%',
                    marginLeft: '8px',
                  },
                }}
              >
                {typeof item.title === 'string' ? (
                  <Text
                    bold={false}
                    size="m"
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
            width={contentWidth ? contentWidth : undefined}
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
            pl={2}
            minWidth={50}
          >
            {typeof item.content === 'string' ? (
              <Text
                bold={false}
                size="m"
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
