export default interface AmountProps {
  value: string | number
  currency?: string
  symbol?: string
  sign?: boolean
  fractionLength?: number
  digitDelimiter?: string
  fractionDelimiter?: string
}
