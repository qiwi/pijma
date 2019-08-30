import React, {FC} from 'react'
import {Box, Pos} from '@qiwi/pijma-core'
import {Text} from '../typography'

export interface DetailsProps {
  children: {title?: string, content: string}[]
  dots?: boolean
}

export const Details: FC<DetailsProps> = ({children, dots}) => (
  !dots ? (
    <Box display="table">
      {children.map((item, i) => (
        <Box css={{display: 'table-row'}} key={i}>
          <Box
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
          >
            <Text
              bold={false}
              size="m"
              color="support"
              children={item.title}
            />
          </Box>
          <Box
            pl={4}
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
          >
            <Text
              bold={false}
              size="m"
              children={item.content}
            />
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
    <Box display="table">
      {children.map((item, i) => (
        <Box css={{display: 'table-row'}} key={i}>
          <Box
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
                <Text
                  bold={false}
                  size="m"
                  color="support"
                  children={item.title}
                />
              </Pos>
            ) : (
              null
            )}
          </Box>
          <Box
            pt={i !== 0 ? 3 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
            pl={2}
            minWidth={50}
          >
            <Text
              bold={false}
              size="m"
              children={item.content}
            />
          </Box>
        </Box>
      ))}
    </Box>
  )
)
