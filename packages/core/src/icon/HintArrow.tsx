import React, { FC } from 'react'

import { OverlayProps } from '../overlays'
import { Path, Svg } from '../primitive'

export interface QuestionArrowProps {
  placement: NonNullable<OverlayProps['placement']>
}

const transform: Record<QuestionArrowProps['placement'], string | undefined> = {
  'top-start': 'rotate(-90deg)',
  top: 'rotate(-90deg)',
  'top-end': 'rotate(-90deg)',
  'right-start': undefined,
  right: undefined,
  'right-end': undefined,
  'bottom-start': 'rotate(90deg)',
  bottom: 'rotate(90deg)',
  'bottom-end': 'rotate(90deg)',
  'left-start': 'rotate(-180deg)',
  left: 'rotate(-180deg)',
  'left-end': 'rotate(-180deg)',
  auto: undefined,
  'auto-start': undefined,
  'auto-end': undefined,
}

export const HintArrow: FC<QuestionArrowProps> = ({ placement }) => (
  <Svg
    width={11}
    height={11}
    viewBox="0 0 44 18"
    focusable="false"
    transform={transform[placement]}
  >
    <Path
      fill="#fff"
      d="M28.5005324,-10.4994676 L28.4994676,29.5005324 L28.4994676,29.5005324 C28.5000557,27.2913934 27.0844414,23.7577939 25.3533373,21.6273787 L18.6466627,13.3736861 C16.9085149,11.2346023 16.9155586,7.75799339 18.6466627,5.62782209 L25.3533373,-2.62492562 C27.0914851,-4.76376445 28.5005324,-8.73255704 28.5005324,-10.4994676 L28.5005324,-10.4994676 Z"
    />
  </Svg>
)
