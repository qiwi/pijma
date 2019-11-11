import React, {FC, ReactElement} from 'react'
import {Box, Pos, Stub, Value} from '@qiwi/pijma-core'
import {Text} from '../typography'

type DetailsText = ReactElement | string

export interface DetailsProps {
  children: {title: DetailsText, content: DetailsText | DetailsText[]}[]
  dots?: boolean
  titleWidth?: Value
  contentWidth?: Value
  size?: 's' | 'm' | 'l'
  stub?: boolean
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

export const Details: FC<DetailsProps> = ({
  children,
  dots,
  titleWidth,
  contentWidth,
  size = 'm',
  stub = false,
}) => (
  stub ? (
    <Box as="dl" width={1} display="table">
      {[{title: 0.2, content: 0.3}, {title: 0.3, content: 0.1}, {title: 0.2, content: 0.2}].map((item, i) => (
        (Object.values(item).map((content, j) => (
          console.log(content),
          <Box css={{display: 'table-row'}} key={`${i}.${j}`}>
            <Box
              as="dt"
              width={titleWidth}
              pt={j !== 0 ? 2 : i !== 0 ? 4 : undefined}
              css={{
                display: 'table-cell',
                verticalAlign: 'bottom',
              }}
            >
              {j === 0 ? (
                dots ? (
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
                    <Stub height={2} width={content}/>
                  </Pos>
                ) : (
                  <Stub height={2} width={content}/>
                )
              ) : (
                null
              )}
            </Box>
            <Box
              as="dd"
              pt={j !== 0 ? 2 : i !== 0 ? 4 : undefined}
              css={{
                display: 'table-cell',
                verticalAlign: 'bottom',
              }}
              pl={indentDots[size]}
            >
              <Stub height={2} width={content}/>
            </Box>
          </Box>
        )))
      ))}
    </Box>
  ) : (
    <Box as="dl" width="100%" display="table">
      {children.map((item, i) => (
        ([] as DetailsText[]).concat(item.content).map((content, j) => (
          <Box css={{display: 'table-row'}} key={`${i}.${j}`}>
            <Box
              as="dt"
              width={titleWidth}
              pt={j !== 0 ? 2 : i !== 0 ? 4 : undefined}
              css={{
                display: 'table-cell',
                verticalAlign: 'bottom',
              }}
            >
              {j === 0 ? (
                dots ? (
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
                    <Text
                      bold={false}
                      size={size}
                      color="support"
                      children={item.title}
                    />
                  </Pos>
                ) : (
                  <Text
                    color="support"
                    bold={false}
                    size={size}
                    children={item.title}
                  />
                )
              ) : (
                null
              )}
            </Box>
            <Box
              as="dd"
              width={contentWidth}
              pt={j !== 0 ? 2 : i !== 0 ? 4 : undefined}
              css={{
                display: 'table-cell',
                verticalAlign: 'bottom',
              }}
              pl={indentDots[size]}
            >
              <Text
                bold={false}
                size={size}
                children={content}
              />
            </Box>
          </Box>
        ))
      ))}
    </Box>
  )
)
