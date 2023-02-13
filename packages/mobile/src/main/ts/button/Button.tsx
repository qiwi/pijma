import React, { cloneElement, FC, Fragment, ReactElement } from 'react'

import {
  Btn,
  ButtonControl,
  Card,
  Flex,
  FlexItem,
  Pos,
  Spinner,
  Stub,
  Typo,
  useTheme,
} from '@qiwi/pijma-core'

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
  icon?: ReactElement
  loading?: boolean
  stub?: boolean
  radius?: number
}

const buttonSize: { [size in ButtonProps['size']]: number } = {
  accent: 12,
  normal: 10,
  minor: 8,
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

const textHeight: { [size in ButtonProps['size']]: number } = {
  accent: 5,
  normal: 4,
  minor: 4,
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

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme()

  return props.stub ? (
    <Card
      width={!props.icon || props.text ? 1 : buttonSize[props.size]}
      height={buttonSize[props.size]}
      bg={theme.button.bg.kind.simple}
      b={theme.button.border.kind.simple}
      r={props.radius ?? buttonRadius[props.size]}
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
          ) : null}
          {props.text || !props.icon ? (
            <Stub
              width={stubWidth[props.size] - (props.icon ? 9 : 0)}
              height={stubHeight[props.size]}
            />
          ) : null}
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
          disabled={props.disabled}
          type={props.type}
          width={!props.icon || props.text ? 1 : buttonSize[props.size]}
          height={buttonSize[props.size]}
          bg={
            props.disabled
              ? '#e6e6e6'
              : renderProps.hover || renderProps.focus
              ? theme.button.bg.hover[props.kind]
              : theme.button.bg.kind[props.kind]
          }
          b={
            props.disabled
              ? 'none'
              : renderProps.hover || renderProps.focus
              ? theme.button.border.hover[props.kind]
              : theme.button.border.kind[props.kind]
          }
          r={props.radius ?? buttonRadius[props.size]}
          transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
          onClick={renderProps.onClick}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onMouseEnter={renderProps.onMouseEnter}
          onMouseLeave={renderProps.onMouseLeave}
          children={
            <Pos
              type="relative"
              width={1}
              height={1}
              cursor={props.disabled ? 'not-allowed' : 'pointer'}
              children={
                <Flex
                  align="center"
                  justify="center"
                  width={1}
                  height={1}
                  px={
                    props.icon && !props.text ? 0 : contextPaddingX[props.size]
                  }
                  transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                  children={
                    <Fragment>
                      <Pos
                        type="absolute"
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        opacity={
                          props.loading
                            ? renderProps.hover ||
                              renderProps.active ||
                              renderProps.focus
                              ? 0.9
                              : 1
                            : 0
                        }
                        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                        children={
                          <Flex
                            align="center"
                            justify="center"
                            width={1}
                            height={1}
                            children={
                              <Spinner
                                paused={!props.loading}
                                width={iconSize[props.size]}
                                height={iconSize[props.size]}
                                color={
                                  props.disabled
                                    ? '#666'
                                    : theme.button.text.color[props.kind]
                                }
                              />
                            }
                          />
                        }
                      />
                      {props.icon ? (
                        <FlexItem
                          shrink={0}
                          opacity={
                            props.loading
                              ? 0
                              : renderProps.hover ||
                                renderProps.active ||
                                renderProps.focus
                              ? 0.9
                              : 1
                          }
                          mr={props.text ? iconMargin[props.size] : 0}
                          width={iconSize[props.size]}
                          height={iconSize[props.size]}
                          transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                          transform="translateZ(0)"
                          children={cloneElement(props.icon, {
                            color: props.disabled
                              ? '#666'
                              : props.kind === 'brand'
                              ? '#fff'
                              : '#000',
                            size: 1,
                          })}
                        />
                      ) : null}
                      {props.text || !props.icon ? (
                        <FlexItem
                          opacity={
                            props.loading
                              ? 0
                              : renderProps.hover ||
                                renderProps.active ||
                                renderProps.focus
                              ? 0.9
                              : 1
                          }
                          overflow="hidden"
                          transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                          children={
                            <Typo
                              nowrap={true}
                              display="block"
                              weight={500}
                              color={
                                props.disabled
                                  ? '#666'
                                  : theme.button.text.color[props.kind]
                              }
                              size={textSize[props.size]}
                              height={textHeight[props.size]}
                              transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                              children={props.text}
                            />
                          }
                        />
                      ) : null}
                    </Fragment>
                  }
                />
              }
            />
          }
        />
      )}
    />
  )
}

Button.displayName = 'Button'
