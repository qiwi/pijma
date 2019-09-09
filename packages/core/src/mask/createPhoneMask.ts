import {Mask} from './Mask'
import PhoneFieldCountry from '../phone-field/PhoneFieldCountry'

export default function createPhoneMask(countries: PhoneFieldCountry[]): Mask {

  function phoneMask(value: string): (string | RegExp)[] {
    const clearMasks = countries
      .map(country => country.mask.slice(1))
      .sort((a, b) => b.length - a.length)
    const mask: Mask = ['+']
    const clearValue = value.replace(/\D/g, '')
    if (clearValue === '') {
      return mask
    }
    const selectedMask = clearMasks.find(clearMask => clearValue.startsWith(clearMask.replace(/\D/g, '').slice(0, clearValue.length)))
    if (!selectedMask) {
      return phoneMask(value.slice(0, -1))
    }
    return mask.concat(selectedMask.split('').map(char => char === 'd' ? /\d/ : new RegExp(char)))
  }

  return phoneMask

}
