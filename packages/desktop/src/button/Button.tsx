import React, {SFC, ReactNode} from 'react'

import {Spinner, ButtonControl} from '@qiwi/pijma-core'

import ButtonWrapper from './ButtonWrapper'
import ButtonContent from './ButtonContent'
import ButtonLoad from './ButtonLoad'
import ButtonIcon from './ButtonIcon'
import ButtonText from './ButtonText'

interface ButtonProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  disabled?: boolean
  kind: 'brand' | 'simple'
  size: 'accent' | 'normal' | 'minor'
  type: 'button' | 'submit'
  text?: string
  icon?: ReactNode
  loading?: boolean
}

const Button: SFC<ButtonProps> = (props) => (
  <ButtonControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <ButtonWrapper
        disabled={props.disabled}
        kind={props.kind}
        size={props.size}
        type={props.type}
        text={props.text}
        icon={props.icon}
        loading={props.loading}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onFocus}
      >
        <ButtonContent>
          <ButtonLoad>
            <Spinner/>
          </ButtonLoad>
          {props.icon ? (
            <ButtonIcon>
              {props.icon}
            </ButtonIcon>
          ) : (
            null
          )}
          {props.text ? (
            <ButtonText>
              {props.text}
            </ButtonText>
          ) : (
            null
          )}
        </ButtonContent>
      </ButtonWrapper>
    )}
  />
)

export default Button
