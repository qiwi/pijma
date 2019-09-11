import PhoneFieldCountry from './PhoneFieldCountry'

export default interface PhoneFieldControlState {
  selectedCountry: PhoneFieldCountry | null
  focusedCountry: PhoneFieldCountry | null
  showCountries: boolean
  focused: boolean
}
