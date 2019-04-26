import React, {FunctionComponent, ReactNode, Fragment} from 'react'

import {ButtonControl, Spinner, Pos, Flex, FlexItem, Typo, Btn} from '@qiwi/pijma-core'

export interface ButtonProps {
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

const buttonBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8c00',
  simple: '#fff padding-box',
}

const buttonHoverBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8200',
  simple: '#F5F5F5 padding-box',
}

const buttonClickBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#FF7600',
  simple: '#e6e6e6 padding-box',
}

const accentButtonBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: 'linear-gradient(to bottom, #ff9810, #ff8300)',
  simple: '#fff padding-box',
}

const buttonBorder: { [kind in ButtonProps['kind']]: string } = {
  brand: 'none',
  simple: '1px solid rgba(0, 0, 0, 0.14)',
}

const buttonHoverBorder: { [kind in ButtonProps['kind']]: string } = {
  brand: 'none',
  simple: '1px solid rgba(0, 0, 0, 0.22)',
}

const buttonRadius: { [size in ButtonProps['size']]: number } = {
  accent: 30,
  normal: 24,
  minor: 20,
}

const buttonSize: { [size in ButtonProps['size']]: number } = {
  accent: 15,
  normal: 12,
  minor: 10,
}

const buttonMinWith: { [size in ButtonProps['size']]: number } = {
  accent: 50,
  normal: 37.5,
  minor: 25,
}

const contextPaddingX: { [size in ButtonProps['size']]: number } = {
  accent: 9,
  normal: 8,
  minor: 7,
}

const textColor: { [kind in ButtonProps['kind']]: string } = {
  brand: '#fff',
  simple: '#000',
}

const textSize: { [size in ButtonProps['size']]: number } = {
  accent: 5,
  normal: 4,
  minor: 3.5,
}

const shadow: { [kind in ButtonProps['kind']]: string } = {
  brand: '0 15px 50px -10px rgb(255, 206, 135)',
  simple: '0 15px 50px -10px rgba(0, 0, 0, 0.15)',
}

const hoverShadow: { [kind in ButtonProps['kind']]: string } = {
  brand: '0 25px 50px -10px rgb(255, 206, 135)',
  simple: '0 25px 50px -10px rgba(0, 0, 0, 0.15)',
}

export const Button: FunctionComponent<ButtonProps> = (props) => (
  <ButtonControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <Btn
        disabled={props.disabled}
        type={props.type}
        width={!props.icon || props.text ? 1 : buttonSize[props.size]}
        height={buttonSize[props.size]}
        minWidth={!props.icon || props.text ? buttonMinWith[props.size] : buttonSize[props.size]}
        bg={props.disabled ? '#e6e6e6' : renderProps.active ? buttonClickBackground[props.kind] : renderProps.hover || renderProps.focus ? buttonHoverBackground[props.kind] : props.size === 'accent' ? accentButtonBackground[props.kind] : buttonBackground[props.kind]}
        b={props.disabled ? 'none' : renderProps.hover || renderProps.focus ? buttonHoverBorder[props.kind] : buttonBorder[props.kind]}
        r={buttonRadius[props.size]}
        s={props.disabled ? 'none' : (renderProps.hover || renderProps.focus) && props.size === 'accent' ? hoverShadow[props.kind] : props.size === 'accent' ? shadow[props.kind] : 'none'}
        transition="box-shadow 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseDown={renderProps.onMouseDown}
        onMouseUp={renderProps.onMouseUp}
        children={(
          <Pos
            type="relative"
            width={1}
            height={1}
            cursor={props.disabled ? 'not-allowed' : 'pointer'}
            children={(
              <Flex
                align="center"
                justify="center"
                width={1}
                height={1}
                px={props.icon && !props.text ? 0 : contextPaddingX[props.size]}
                transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                children={(
                  <Fragment>
                    <Pos
                      type="absolute"
                      top={0}
                      right={0}
                      bottom={0}
                      left={0}
                      opacity={props.loading ? (renderProps.hover || renderProps.active || renderProps.focus ? 0.9 : 1) : 0}
                      transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                      children={(
                        <Flex
                          align="center"
                          justify="center"
                          width={1}
                          height={1}
                          children={(
                            <Spinner
                              width={6}
                              height={6}
                              color={props.disabled ? '#666' : textColor[props.kind]}
                            />
                          )}
                        />
                      )}
                    />
                    {props.icon ? (
                      <FlexItem
                        shrink={0}
                        opacity={props.loading ? 0 : renderProps.hover || renderProps.active || renderProps.focus ? 0.9 : 1}
                        mr={props.text ? 3 : 0}
                        width={6}
                        height={6}
                        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                        css={{
                          fill: props.disabled ? '#666' : props.kind === 'brand' ? '#fff' : '#000',
                        }}
                        children={props.icon}
                      />
                    ) : (
                      null
                    )}
                    {props.text || !props.icon ? (
                      <FlexItem
                        opacity={props.loading ? 0 : renderProps.hover || renderProps.active || renderProps.focus ? 0.9 : 1}
                        overflow="hidden"
                        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                        children={(
                          <Typo
                            nowrap={true}
                            display="block"
                            weight={500}
                            color={props.disabled ? '#666' : textColor[props.kind]}
                            size={textSize[props.size]}
                            height={textSize[props.size]}
                            transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                            children={props.text}
                          />
                        )}
                      />
                    ) : (
                      null
                    )}
                  </Fragment>
                )}
              />
            )}
          />
        )}
      />
    )}
  />
)
