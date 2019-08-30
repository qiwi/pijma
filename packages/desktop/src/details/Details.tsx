import React, {FC} from 'react'
import {Flex, Box} from '@qiwi/pijma-core'
import {Paragraph, Text} from '../typography'

export interface DetailsProps {
  children: {title?: string, content: string}[]
  dots?: boolean
  /** % */
  titleWidth?: number
}

export const Details: FC<DetailsProps> = ({children, dots, titleWidth = 50}) => (
  !dots ? (
    <Flex direction="column">
      {children.map((item, i) => (
        <Flex mt={i !== 0 ? 3 : undefined} align="baseline" key={i}>
          <Box mt="auto" width={titleWidth + '%'}>
            <Text bold={false} size="m" color="support" children={item['title']}/>
          </Box>
          <Box pl={3} mt="auto" width={100 - titleWidth + '%'}>
            <Paragraph size="m" children={item['content']}/>
          </Box>
        </Flex>
      ))}
    </Flex>
  ) : (
    <Flex direction="column">
      {children.map((item, i) => (
        <Flex mt={i !== 0 ? 3 : undefined} key={i}>
          <Box
            overflow="hidden"
            mt="auto"
            width={titleWidth + '%'}
            css={{
              position: 'relative',
              ':after': {
                content: '""',
                position: 'absolute',
                bottom: '7px',
                borderBottom: 'dashed 1px #e6e6e6',
                width: '100%',
                marginLeft: '8px',
                marginRight: '8px',
              },
            }}
          >
            <Text bold={false} size="m" color="support" children={item['title']}/>
          </Box>
          <Box mt="auto" pl={2} width={100 - titleWidth + '%'}>
            <Paragraph size="m" children={item['content']}/>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
)

Details.defaultProps = {
  titleWidth: 50,
}
