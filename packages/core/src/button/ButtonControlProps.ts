import {RenderChild} from '@qiwi/pijma-core'

export default interface ButtonControlProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  children: RenderChild<{
    onClick: React.MouseEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
  }>
}
