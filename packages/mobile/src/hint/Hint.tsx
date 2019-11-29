import React, {FC, ReactNode} from 'react'

import {Manager, Popper, Reference} from 'react-popper'

import {Pos, Box, QuestionIcon, Card, Spacer, HintControl, QuestionArrow} from '@qiwi/pijma-core'
import {Heading, Text} from '../typography'

export interface HintProps {
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
  size: 'small' | 'string'
  width: number
  title: ReactNode
  content: ReactNode
  show: boolean
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
  'top-start': '0 0 24px 0',
  'top': '0 0 24px 0',
  'top-end': '0 0 24px 0',
  'right-start': '0 0 0 24px',
  'right': '0 0 0 24px',
  'right-end': '0 0 0 24px',
  'bottom-end': '24px 0 0 0',
  'bottom': '24px 0 0 0',
  'bottom-start': '24px 0 0 0',
  'left-end': '0 24px 0 0',
  'left': '0 24px 0 0',
  'left-start': '0 24px 0 0',
}

export const Hint: FC<HintProps> = ({
  placement = 'auto',
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
          <Reference>
            {({ref}) => (
              <Box cursor="pointer" onClick={renderProps.onClick} ref={ref}>
                <QuestionIcon/>
              </Box>
            )}
          </Reference>
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
                    transform={TransformArrow[placement]}
                    type="absolute"
                    ref={arrowProps.ref}
                    style={arrowProps.style}
                    width="1em"
                    height="3em"
                    top={placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end' ? 0 : undefined}
                    bottom={placement === 'top' || placement === 'top-start' || placement === 'top-end' ? 0 : undefined}
                    left={placement === 'left' || placement === 'left-start' || placement === 'left-end' ? undefined : 0}
                    right={placement === 'left' || placement === 'left-start' || placement === 'left-end' ? 0 : undefined}
                    mt={placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end' ? '-2.75em' : undefined}
                    mb={placement === 'top' || placement === 'top-start' || placement === 'top-end' ? '-2.75em' : undefined}
                    ml={placement === 'right' || placement === 'right-start' || placement === 'right-end' ? '-1.75em' : undefined}
                    mr={placement === 'left' || placement === 'left-start' || placement === 'left-end' ? '-1.75em' : undefined}
                  >
                    <QuestionArrow/>
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
