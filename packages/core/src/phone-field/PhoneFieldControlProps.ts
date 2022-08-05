import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react'

import { FlagProps } from '../flag'
import { Mask } from '../mask'
import { PhoneFieldCountry } from './PhoneFieldCountry'

export interface PhoneFieldControlProps {
  countries: PhoneFieldCountry[]
  value?: string
  hideOnBlur?: boolean
  onChange?: (phone: string, code: FlagProps['code'] | undefined) => void
  onFocus?: () => void
  onBlur?: () => void
  children: FC<{
    value: string
    code: FlagProps['code'] | undefined
    countries: Array<
      PhoneFieldCountry & {
        ref: RefObject<HTMLDivElement>
        selected: boolean
        focused: boolean
        onClick: MouseEventHandler
        onMouseEnter: MouseEventHandler
        onMouseLeave: MouseEventHandler
      }
    >
    focused: boolean
    showCountries: boolean
    containerRef: RefObject<HTMLDivElement>
    inputRef: RefObject<HTMLInputElement>
    dropdownRef: RefObject<HTMLDivElement>
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onFlagClick: MouseEventHandler
    onFlagMouseDown: MouseEventHandler
    mask: Mask
    onCountriesHide: () => void
    onSelectCountry: (index: number) => void
  }>
}
