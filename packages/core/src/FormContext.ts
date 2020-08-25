import React from 'react'

export interface IFormContext {
  onChange: React.ChangeEventHandler
  onBlur: React.FocusEventHandler
}

export const FormContext = React.createContext<IFormContext | undefined>(undefined)
