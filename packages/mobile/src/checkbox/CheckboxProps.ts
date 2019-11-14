export default interface CheckboxProps {
  disabled?: boolean
  checked: boolean
  label: string
  tabIndex?: number
  description?: string
  autoFocus?: boolean
  stub?: boolean
  onChange: (value: boolean) => void
}
