import { Box, getDataProps, HintControl, QuestionIcon } from '@qiwi/pijma-core'
import React, { FC, Fragment, ReactNode } from 'react'

import { SimpleModal } from '../modal'
import { Paragraph } from '../typography'

export interface HintProps {
  show: boolean
  children: ReactNode
  onShow: () => void
  onHide: () => void
}

export const Hint: FC<HintProps> = ({ children, show, onShow, onHide, ...rest }) => (
  <HintControl
    show={show}
    onShow={onShow}
    children={(renderProps) => (
      <Fragment {...getDataProps(rest)}>
        <Box
          cursor="pointer"
          onClick={renderProps.onClick}
          ref={renderProps.target}
          width={6}
          height={6}
        >
          <QuestionIcon />
        </Box>
        <SimpleModal closable show={renderProps.show} onHide={onHide}>
          {typeof children === 'string' ? (
            <Paragraph children={children} />
          ) : (
            children
          )}
        </SimpleModal>
      </Fragment>
    )}
  />
)
