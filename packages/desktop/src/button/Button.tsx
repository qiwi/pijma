import React, {FunctionComponent, ReactNode, Fragment} from 'react'

import {ButtonControl, Spinner, Pos, Flex, FlexItem, Typo, Btn, Stub} from '@qiwi/pijma-core'

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
  stub?: boolean
}

const buttonBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8c00',
  simple: '#fff padding-box',
}

const buttonHoverBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8200',
  simple: '#fff padding-box',
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
  simple: '1px solid rgba(0, 0, 0, 0.28)',
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

const stubHeight: { [size in ButtonProps['size']]: number } = {
  accent: 3,
  normal: 2,
  minor: 2,
}

const stubWidth: { [size in ButtonProps['size']]: number } = {
  accent: 23,
  normal: 21,
  minor: 19,
}

export const Button: FunctionComponent<ButtonProps> = (props) => (
  <ButtonControl
    onClick={props.stub ? undefined : props.onClick}
    onFocus={props.stub ? undefined : props.onFocus}
    onBlur={props.stub ? undefined : props.onBlur}
    children={(renderProps) => (
      <Btn
        disabled={props.stub ? false : props.disabled}
        type={props.stub ? 'button' : props.type}
        width={!props.icon || props.text ? 1 : buttonSize[props.size]}
        height={buttonSize[props.size]}
        minWidth={props.text ? buttonMinWith[props.size] : 1}
        bg={props.stub ? (
          buttonBackground.simple
        ) : props.disabled ? (
          '#e6e6e6'
        ) : renderProps.hover || renderProps.focus ? (
          buttonHoverBackground[props.kind]
        ) : props.size === 'accent' ? (
          accentButtonBackground[props.kind]
        ) : (
          buttonBackground[props.kind]
        )}
        b={props.stub ? (
          buttonBorder.simple
        ) : props.disabled ? (
          'none'
        ) : renderProps.hover || renderProps.focus ? (
          buttonHoverBorder[props.kind]
        ) : (
          buttonBorder[props.kind]
        )}
        r={buttonRadius[props.size]}
        s={props.disabled || props.stub ? (
          'none'
        ) : props.size === 'accent' && (renderProps.hover || renderProps.focus) ? (
          hoverShadow[props.kind]
        ) : (
          props.size === 'accent' ? shadow[props.kind] : 'none'
        )}
        transition={props.stub ? 'none' : 'box-shadow 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'}
        onClick={props.stub ? undefined : renderProps.onClick}
        onFocus={props.stub ? undefined : renderProps.onFocus}
        onBlur={props.stub ? undefined : renderProps.onFocus}
        onMouseEnter={props.stub ? undefined : renderProps.onMouseEnter}
        onMouseLeave={props.stub ? undefined : renderProps.onMouseLeave}
        children={(
          <Pos
            type="relative"
            width={1}
            height={1}
            cursor={props.stub ? 'default' : props.disabled ? 'not-allowed' : 'pointer'}
            children={(
              <Flex
                align="center"
                justify="center"
                width={1}
                height={1}
                px={props.icon && !props.text ? 0 : contextPaddingX[props.size]}
                transition={props.stub ? 'none' : 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'}
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
                        opacity={props.stub ? (
                          1
                        ) : props.loading ? (
                          0
                        ) : renderProps.hover || renderProps.active || renderProps.focus ? (
                          0.9
                        ) : (
                          1
                        )}
                        mr={props.text ? 3 : 0}
                        width={6}
                        height={6}
                        transition={props.stub ? 'none' : 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'}
                        css={{
                          fill: props.disabled ? '#666' : props.kind === 'brand' ? '#fff' : '#000',
                        }}
                        children={props.stub ? (
                          <Stub
                            top={0.5}
                            right={0.5}
                            bottom={0.5}
                            left={0.5}
                            width={5}
                            height={5}
                          />
                        ) : (
                          props.icon
                        )}
                      />
                    ) : (
                      null
                    )}
                    {props.text || !props.icon ? (
                      <FlexItem
                        opacity={props.stub ? (
                          1
                        ) : props.loading ? (
                          0
                        ) : renderProps.hover || renderProps.active || renderProps.focus ? (
                          0.9
                        ) : (
                          1
                        )}
                        overflow="hidden"
                        transition={props.stub ? 'none' : 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'}
                        children={props.stub ? (
                          <Stub
                            width={stubWidth[props.size] - (props.icon ? 9 : 0)}
                            height={stubHeight[props.size]}
                          />
                        ) : (
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
