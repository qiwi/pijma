import Country from './Country'

export default class Phone {

  constructor(phoneNumber: string, countries: Country[], countryFallback: Country = {
    name: 'Россия',
    code: 'RU',
    mask: '+7dddddddddd',
  }) {
    this.phoneNumber = phoneNumber
    this.countries = countries
    this.countryFallback = countryFallback
  }

  private countries: Country[]

  private countryFallback: Country

  public phoneNumber: string

  public get country(): Country {
    const clearPhone = this.phoneNumber.replace(/\D/g, '')
    const country = this.countries
      .slice(0)
      .sort((a, b) => b.mask.replace(/\D/g, '').length - a.mask.replace(/\D/g, '').length)
      .find((option) => clearPhone.indexOf(option.mask.replace(/\D/g, '')) === 0)
    return country || this.countryFallback
  }

  public set country(country: Country) {
    const currentCountryMask = this.country.mask.replace(/\D/g, '')
    const newCountryMask = country.mask.replace(/\D/g, '')
    this.phoneNumber = `+${newCountryMask}${this.phoneNumber.replace(/\D/g, '').substr(currentCountryMask.length)}`
  }

}
