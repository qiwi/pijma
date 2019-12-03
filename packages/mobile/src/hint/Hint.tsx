import React, {FC, ReactNode} from 'react'

import {Manager, Popper, Reference} from 'react-popper'

import {Pos, Box, QuestionIcon, Card, Spacer, HintControl, QuestionArrow} from '@qiwi/pijma-core'
import {Heading, Text} from '../typography'

export interface HintProps {
  size: 'small' | 'strong'
  show: boolean
  content: ReactNode
  placement: 'auto-start'
    | 'auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start'
  width?: number
  title?: ReactNode
  onClick: (show: boolean) => void
}

const TransformArrow: Record<NonNullable<HintProps['placement']>, string> = {
  'auto-start': `rotate(${0}deg)`,
  'auto': `rotate(${0}deg)`,
  'auto-end': `rotate(${0}deg)`,
  'top-start': `rotate(${-90}deg)`,
  'top': `rotate(${-90}deg)`,
  'top-end': `rotate(${-90}deg)`,
  'right-start': `rotate(${0}deg)`,
  'right': `rotate(${0}deg)`,
  'right-end': `rotate(${0}deg)`,
  'bottom-end': `rotate(${90}deg)`,
  'bottom': `rotate(${90}deg)`,
  'bottom-start': `rotate(${90}deg)`,
  'left-end': `rotate(${180}deg)`,
  'left': `rotate(${180}deg)`,
  'left-start': `rotate(${180}deg)`,
}

const IndentItem: Record<NonNullable<HintProps['placement']>, string> = {
  'auto-start': '',
  'auto': '',
  'auto-end': '',
  'top-start': '0 0 24px -48px',
  'top': '0 0 24px 0',
  'top-end': '0 -48px 24px 0',
  'right-start': '-48px 0 0 24px',
  'right': '0 0 0 24px',
  'right-end': '0 0 -48px 24px',
  'bottom-end': '24px -48px 0 0',
  'bottom': '24px 0 0 0',
  'bottom-start': '24px 0 0 -48px',
  'left-end': '0 24px -48px 0',
  'left': '0 24px 0 0',
  'left-start': '-48px 24px 0 0',
}

const ArrowSizeWidth: Record<NonNullable<HintProps['placement']>, number> = {
  'auto-start': 0,
  'auto': 0,
  'auto-end': 0,
  'top-start': 11,
  'top': 11,
  'top-end': 11,
  'right-start': 2.75,
  'right': 2.75,
  'right-end': 2.75,
  'bottom-end': 11,
  'bottom': 11,
  'bottom-start': 11,
  'left-end': 2.75,
  'left': 2.75,
  'left-start': 2.75,
}

const ArrowSizeHeight: Record<NonNullable<HintProps['placement']>, number> = {
  'auto-start': 0,
  'auto': 0,
  'auto-end': 0,
  'top-start': 11,
  'top': 11,
  'top-end': 11,
  'right-start': 11,
  'right': 11,
  'right-end': 11,
  'bottom-end': 2.75,
  'bottom': 2.75,
  'bottom-start': 2.75,
  'left-end': 11,
  'left': 11,
  'left-start': 11,
}

export const Hint: FC<HintProps> = ({
  placement,
  size,
  width,
  title,
  content,
  show,
  onClick,
}) => (
  <HintControl
    show={show}
    onClick={onClick}
    children={(renderProps) => (
      <Manager>
        <Pos type="relative">
          <Reference
            children={({ref}) => (
              <Box cursor="pointer" onClick={renderProps.onClick} ref={ref} width={6} height={6}>
                <QuestionIcon/>
              </Box>
            )}
          />
          {show ? (
            <Popper
              placement={placement}
              children={({ref, placement, style, arrowProps}) => (
                <Pos
                  ref={ref}
                  style={style}
                  m={IndentItem[placement]}
                  zIndex={1}
                >
                  <Card
                    bg="#fff"
                    s="0 8px 16px 0 rgba(0, 0, 0, 0.12)"
                    r={10}
                    p={size === 'small' ? 4 : 8}
                    width={size === 'small' ? undefined : width}
                    css={size === 'small' ? {whiteSpace: 'nowrap'} : undefined}
                  >
                    <Spacer size="xs">
                      {title ? (
                        <Heading size="4" children={title}/>
                      ) : (
                        null
                      )}
                      <Text
                        size={size === 'small' ? 'm' : 's'}
                        display="block"
                        bold={false}
                        children={content}
                      />
                    </Spacer>
                  </Card>
                  <Pos
                    type="absolute"
                    ref={arrowProps.ref}
                    style={arrowProps.style}
                    width={ArrowSizeWidth[placement]}
                    height={ArrowSizeHeight[placement]}
                    top={placement ? placement.includes('bottom') ? 0 : undefined : undefined}
                    bottom={placement ? placement.includes('top') ? 0 : undefined : undefined}
                    left={placement ? placement.includes('left') ? undefined : 0 : undefined}
                    right={placement ? placement.includes('left') ? 0 : undefined : undefined}
                    mt={placement ? placement.includes('bottom') ? -7 : undefined : undefined}
                    mb={placement ? placement.includes('top') ? -7 : undefined : undefined}
                    ml={placement ? placement.includes('right') ? -7 : undefined : undefined}
                    mr={placement ? placement.includes('left') ? 1.25 : undefined : undefined}
                  >
                    <QuestionArrow transform={TransformArrow[placement]}/>
                  </Pos>
                </Pos>
              )}
            />
          ) : (
            null
          )}
        </Pos>
      </Manager>
    )}
  />
)
