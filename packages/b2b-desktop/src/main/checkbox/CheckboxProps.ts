type TTrinaryValue = 0 | 1 | 2

export default interface CheckboxProps {
  trinary?: boolean
  value: TTrinaryValue | boolean
  onChange?: (value?: TTrinaryValue | boolean) => void
  disabled?: boolean
  focused?: boolean
}
