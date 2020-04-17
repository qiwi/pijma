import React, {FC, Fragment} from 'react'
import {Box, Flex, FlexItem, Typo, SelectScrollControl, SelectScrollItemControl, SelectScrollItem, Pos} from '@qiwi/pijma-core'
import {Button} from '../'

export interface SelectScrollProps {
  selected?: number[]
  items: SelectScrollItem[][]
  blockHeight?: number
  onSelect?: (values: number[]) => void
}

export const SelectScroll: FC<SelectScrollProps> = ({
  selected = [],
  items,
  blockHeight = 9.5,
  onSelect,
}) => {
  const height = blockHeight * 7

  return (
    <SelectScrollControl
      items={items}
      selected={selected}
      onSelect={onSelect}
      children={renderProps => (
        <Fragment>
          <Pos
            type="relative"
            // height={1}
            css={{
              ['-webkit-mask-image']: '-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),color-stop(50%, rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
            }}
          >
            <Flex>
              {renderProps.items.map((list, key) => (
                <SelectScrollItemControl
                  key={key}
                  index={key}
                  items={list}
                  blockHeight={blockHeight}
                  onSelect={renderProps.onSelect}
                  children={renderPropsItem => (
                    <FlexItem
                      ref={renderPropsItem.containerRef}
                      width={1}
                      height={height}
                      py={28.5}
                      align="center"
                      overflow="auto"
                      css={{
                        '&::-webkit-scrollbar': {
                          display: 'none',
                        },
                        webkitOverflowScrolling: 'touch',
                      }}
                      onScroll={renderPropsItem.onScroll}
                    >
                      {list.map(listItem => (
                        <Box
                          key={listItem.value}
                          ref={listItem.ref}
                          width={1}
                          overflow="hidden"
                          onClick={renderPropsItem.onItemClick(listItem)}
                          py={1.75}
                          cursor="pointer"
                        >
                          <Typo
                            size={4}
                            height={6}
                            align="center"
                            weight={listItem.selected ? 500 : 300}
                          >
                            {listItem.text}
                          </Typo>
                        </Box>
                      ))}
                    </FlexItem>
                  )}
                />
              ))}
              <Pos
                type="absolute"
                width={1}
                top={0.5}
                height={9.5}
                left={0}
                mt={-4.75}
                css={{
                  pointerEvents: 'none',
                  '&:before' : {
                    content: '" "',
                    position: 'absolute',
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e6e6e6',
                  },
                  '&:after' : {
                    content: '" "',
                    position: 'absolute',
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e6e6e6',
                    bottom: 0,
                  },
                }}
              />
            </Flex>
          </Pos>
          <Box my={3.5} mx={6}>
            <Button
              type="button"
              kind="brand"
              size="normal"
              text="Выбрать"
              onClick={renderProps.onSubmit}
            />
          </Box>
        </Fragment>
      )}
    />
  )
}
