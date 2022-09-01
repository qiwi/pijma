import { PhoneFieldCountry } from './PhoneFieldCountry'

export interface PhoneFieldControlState {
  selectedCountry: PhoneFieldCountry | null
  focusedCountry: PhoneFieldCountry | null
  showCountries: boolean
  focused: boolean
}
