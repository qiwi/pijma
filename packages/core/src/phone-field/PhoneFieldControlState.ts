import Country from './Country'

export default interface PhoneFieldControlState {
  country: Country
  selectedCountry: Country | null
  showCountries: boolean
  focused: boolean
}
