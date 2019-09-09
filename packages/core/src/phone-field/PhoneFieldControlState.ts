import PhoneFieldCountry from './PhoneFieldCountry'

export default interface PhoneFieldControlState {
  selectedCountry: PhoneFieldCountry
  focusedCountry: PhoneFieldCountry | null
  showCountries: boolean
  focused: boolean
}
