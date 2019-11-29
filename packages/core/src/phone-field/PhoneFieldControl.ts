import {Component, RefObject, createRef} from 'react'
import MaskedInput from 'react-text-mask'
import {findDOMNode} from 'react-dom'

import PhoneFieldControlProps from './PhoneFieldControlProps'
import PhoneFieldControlState from './PhoneFieldControlState'

import PhoneFieldCountry from './PhoneFieldCountry'
import {createPhoneMask} from '../mask'

export default class PhoneFieldControl extends Component<PhoneFieldControlProps, PhoneFieldControlState> {

  public componentDidUpdate(props: PhoneFieldControlProps, state: PhoneFieldControlState) {
    if (
      state.selectedCountry === null || (
        state.selectedCountry &&
        this.state.selectedCountry &&
        state.selectedCountry.mask !== this.state.selectedCountry.mask &&
        this.props.value
      )
    ) {
      this.inputField.setSelectionRange(-1, -1)
    }
    if (this.props.countries !== props.countries) {
      this.optionsRefs = new Map(
        this.props.countries.map((country => [country, createRef()])),
      )
    }
  }

  public state: PhoneFieldControlState = {
    focused: false,
    showCountries: false,
    selectedCountry: null,
    focusedCountry: null,
  }

  private containerRef: RefObject<HTMLDivElement> = createRef()

  private inputRef: RefObject<MaskedInput> = createRef()

  private dropdownRef: RefObject<HTMLDivElement> = createRef()

  private optionsRefs: Map<PhoneFieldCountry, RefObject<HTMLDivElement>> = new Map(
    this.props.countries.map((country => [country, createRef()])),
  )

  private onCountryClick: (index: number) => React.MouseEventHandler = (index) => (event) => {
    event.preventDefault()
    this.selectCountry(index)
  }

  private onCountryEnter: (country: PhoneFieldCountry) => React.MouseEventHandler = (country) => (event) => {
    event.preventDefault()
    this.setState({
      focusedCountry: country,
    })
  }

  private onCountryLeave: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focusedCountry: null,
    })
  }

  private get inputField(): HTMLInputElement {
    return findDOMNode(this.inputRef.current!) as HTMLInputElement
  }

  private onFlagClick: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.inputField.focus()
    this.setState({
      showCountries: true,
    })
  }

  private onFlagMouseDown: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.inputField.focus()
  }

  private selectCountry: (index: number) => void = (index) => {
    const country = this.props.countries[index]
    const phoneNumber = this.props.value ? this.props.value : ''
    const currentCountryMask = this.state.selectedCountry ? this.clear(this.state.selectedCountry.mask) : ''
    const newCountryMask = this.clear(country.mask)
    if (this.props.onChange) {
      this.props.onChange(
        `+${newCountryMask}${this.clear(phoneNumber).substr(currentCountryMask.length)}`,
        country.code,
      )
    }
    this.inputField.focus()
    this.setState({
      showCountries: false,
      selectedCountry: country,
    })
  }

  private onCountriesHide: () => void = () => {
    this.setState({
      showCountries: false,
    })
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    const country = this.getCountryByPhone(event.currentTarget.value)
    if (this.props.onChange) {
      this.props.onChange(
        event.currentTarget.value,
        country ? country.code : undefined,
      )
    }
    this.setState({
      selectedCountry: country ? country : null,
    })
  }

  private onFocus: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focused: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focused: false,
    })
    if (this.props.hideOnBlur) {
      this.setState({
        showCountries: false,
      })
    }
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private clear: (value: string) => string = (value) => {
    return value.replace(/\D/g, '')
  }

  private getCountryByPhone: (phoneNumber: string) => PhoneFieldCountry | undefined = (phoneNumber) => {
    const clearPhone = this.clear(phoneNumber)
    return this.props.countries
               .slice(0)
               .sort((a, b) => this.clear(b.mask).length - this.clear(a.mask).length)
               .find((option) => clearPhone.indexOf(this.clear(option.mask)) === 0)
  }

  public render() {
    return this.props.children({
      value: this.props.value || '',
      code: this.state.selectedCountry ? this.state.selectedCountry.code : undefined,
      countries: this.props.countries.map((country, index) => ({
        ...country,
        ref: this.optionsRefs.get(country)!,
        selected: country === this.state.selectedCountry,
        focused: country === this.state.focusedCountry,
        onClick: this.onCountryClick(index),
        onMouseEnter: this.onCountryEnter(country),
        onMouseLeave: this.onCountryLeave,
      })),
      focused: this.state.focused,
      showCountries: this.state.showCountries,
      containerRef: this.containerRef,
      inputRef: this.inputRef,
      dropdownRef: this.dropdownRef,
      mask: createPhoneMask(this.props.countries.map(country => country.mask)),
      onFlagClick: this.onFlagClick,
      onFlagMouseDown: this.onFlagMouseDown,
      onCountriesHide: this.onCountriesHide,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onSelectCountry: this.selectCountry,
    })
  }

}
