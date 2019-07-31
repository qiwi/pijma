import React, {Fragment, FunctionComponent, ReactNode} from 'react'

import {Btn, ButtonControl, Card, Flex, FlexItem, Pos, Spinner, Stub, Typo} from '@qiwi/pijma-core'

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

const buttonSize: { [size in ButtonProps['size']]: number } = {
  accent: 12,
  normal: 10,
  minor: 8,
}

const buttonBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8c00',
  simple: '#fff padding-box',
}

const buttonHoverBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8200',
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
  accent: 24,
  normal: 20,
  minor: 16,
}

const contextPaddingX: { [size in ButtonProps['size']]: number } = {
  accent: 8,
  normal: 6,
  minor: 4,
}

const iconSize: { [size in ButtonProps['size']]: number } = {
  accent: 6,
  normal: 6,
  minor: 5,
}

const iconMargin: { [size in ButtonProps['size']]: number } = {
  accent: 3,
  normal: 1.5,
  minor: 1,
}

const textSize: { [size in ButtonProps['size']]: number } = {
  accent: 4,
  normal: 3.5,
  minor: 3.5,
}

const textColor: { [kind in ButtonProps['kind']]: string } = {
  brand: '#fff',
  simple: '#000',
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
  props.stub ? (
    <Card
      width={!props.icon || props.text ? 1 : buttonSize[props.size]}
      height={buttonSize[props.size]}
      bg={buttonBackground.simple}
      b={buttonBorder.simple}
      r={buttonRadius[props.size]}
    >
      <Flex
        align="center"
        justify="center"
        width={1}
        height={1}
        px={props.icon && !props.text ? 0 : contextPaddingX[props.size]}
      >
        <Fragment>
          {props.icon ? (
            <FlexItem
              shrink={0}
              mr={props.text ? iconMargin[props.size] : 0}
              width={iconSize[props.size]}
              height={iconSize[props.size]}
            >
              <Stub
                top={0.5}
                right={0.5}
                bottom={0.5}
                left={0.5}
                width={iconSize[props.size] - 1}
                height={iconSize[props.size] - 1}
                r={(iconSize[props.size] - 1) * 2}
              />
            </FlexItem>
          ) : (
            null
          )}
          {props.text || !props.icon ? (
            <Stub
              width={stubWidth[props.size] - (props.icon ? 9 : 0)}
              height={stubHeight[props.size]}
            />
          ) : (
            null
          )}
        </Fragment>
      </Flex>
    </Card>
  ) : (
    <ButtonControl
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      children={(renderProps) => (
        <Btn
          role="button"
          disabled={props.disabled}
          type={props.type}
          width={!props.icon || props.text ? 1 : buttonSize[props.size]}
          height={buttonSize[props.size]}
          bg={props.disabled ? '#e6e6e6' : renderProps.hover || renderProps.focus ? buttonHoverBackground[props.kind] : buttonBackground[props.kind]}
          b={props.disabled ? 'none' : renderProps.hover || renderProps.focus ? buttonHoverBorder[props.kind] : buttonBorder[props.kind]}
          r={buttonRadius[props.size]}
          transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
          onClick={renderProps.onClick}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onFocus}
          onMouseEnter={renderProps.onMouseEnter}
          onMouseLeave={renderProps.onMouseLeave}
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
                                width={iconSize[props.size]}
                                height={iconSize[props.size]}
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
                          mr={props.text ? iconMargin[props.size] : 0}
                          width={iconSize[props.size]}
                          height={iconSize[props.size]}
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
)
