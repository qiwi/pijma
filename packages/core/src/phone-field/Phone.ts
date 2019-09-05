import PhoneFieldCountry from './PhoneFieldCountry'

export default class Phone {

  constructor(phoneNumber: string, countries: PhoneFieldCountry[], countryFallback: PhoneFieldCountry) {
    this.phoneNumber = phoneNumber
    this.countries = countries
    this.countryFallback = countryFallback
  }

  private countries: PhoneFieldCountry[]

  private countryFallback: PhoneFieldCountry

  public phoneNumber: string

  public get country(): PhoneFieldCountry {
    const clearPhone = this.phoneNumber.replace(/\D/g, '')
    const country = this.countries
      .slice(0)
      .sort((a, b) => b.mask.replace(/\D/g, '').length - a.mask.replace(/\D/g, '').length)
      .find((option) => clearPhone.indexOf(option.mask.replace(/\D/g, '')) === 0)
    return country || this.countryFallback
  }

}
