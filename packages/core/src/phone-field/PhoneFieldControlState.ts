import PhoneFieldCountry from './PhoneFieldCountry'

export default interface PhoneFieldControlState {
  country: PhoneFieldCountry
  selectedCountry: PhoneFieldCountry | null
  showCountries: boolean
  focused: boolean
}
