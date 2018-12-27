import RenderChild from '../RenderChild'

export default interface LinkControlProps {
  onClick?: (href?: string, target?: string, download?: boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  href?: string
  target?: string
  download?: boolean
  rel?: string
  children: RenderChild<{
    active: boolean
    focus: boolean
    hover: boolean
    onClick: React.MouseEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onMouseUp: React.MouseEventHandler
    onMouseDown: React.MouseEventHandler
  }>
}
