import { Box, styled } from '@qiwi/pijma-core'

export const ChipsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`

export default styled.div<{
  noDialog?: boolean
  active: boolean
  disabled?: boolean
}>`
  text-align: center;
  border: 1px dashed #ccc;
  border-radius: 10px;
  cursor: ${({ noDialog }) => (noDialog ? 'inherit' : 'pointer')};
  transition: background 0.2s;
  background: ${({ active }) => (active ? '#e6e6e6' : 'transparent')};
  border-style: ${({ active }) => (active ? 'solid' : 'dashed')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'inherit')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
`
