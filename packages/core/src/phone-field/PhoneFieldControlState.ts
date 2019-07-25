import CountryCode from './CountryCode'

export default interface PhoneFieldControlState {
  countryCode: CountryCode
  selectedCountry: CountryCode | null
  showCountries: boolean
  focused: boolean
}
