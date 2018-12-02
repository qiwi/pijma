import RenderChild from '../RenderChild'

export default interface ButtonControlProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  children: RenderChild<{
    active: boolean
    focus: boolean
    hover: boolean
    onClick: React.MouseEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
  }>
}
