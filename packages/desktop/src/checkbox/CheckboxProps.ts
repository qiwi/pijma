export default interface CheckboxProps {
  disabled?: boolean
  checked: boolean
  label: string
  tabIndex?: number
  description?: string
  autoFocus?: boolean
  onChange: () => void
  onFocus?: () => void
  onBlur?: () => void
}
