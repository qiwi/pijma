import { styled } from '@qiwi/pijma-core'

import OffsetProps from './OffsetProps'

export const Offset = styled('div')<OffsetProps>`
  margin-top: ${(props: OffsetProps) => props.mt || 0}px;
  margin-right: ${(props: OffsetProps) =>
    props.mr === undefined ? 40 : props.mr}px;
  margin-bottom: ${(props: OffsetProps) => props.mb || 0}px;
  margin-left: ${(props: OffsetProps) =>
    props.ml === undefined ? 40 : props.ml}px;
`
