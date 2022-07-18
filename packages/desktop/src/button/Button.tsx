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
import React, { Fragment, FunctionComponent, ReactElement } from 'react'

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

const textSize: { [size in ButtonProps['size']]: number } = {
  accent: 5,
  normal: 4,
  minor: 3.5,
}

const textHeight: { [size in ButtonProps['size']]: number } = {
  accent: 7,
  normal: 5,
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

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const theme = useTheme()

  return props.stub ? (
    <Card
      width={!props.icon || props.text ? 1 : buttonSize[props.size]}
      height={buttonSize[props.size]}
      minWidth={props.text ? buttonMinWith[props.size] : undefined}
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
            <FlexItem shrink={0} mr={props.text ? 3 : 0} width={6} height={6}>
              <Stub
                top={0.5}
                right={0.5}
                bottom={0.5}
                left={0.5}
                width={5}
                height={5}
                r={10}
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
          minWidth={props.text ? buttonMinWith[props.size] : undefined}
          bg={
            props.disabled
              ? '#e6e6e6'
              : renderProps.hover || renderProps.focus
              ? theme.button.bg.hover[props.kind]
              : props.size === 'accent'
              ? theme.button.bg.accent[props.kind]
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
          s={
            props.disabled
              ? 'none'
              : (renderProps.hover || renderProps.focus) &&
                props.size === 'accent'
              ? theme.button.shadow.hover[props.kind]
              : props.size === 'accent'
              ? theme.button.shadow.kind[props.kind]
              : 'none'
          }
          transition="box-shadow 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
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
                                width={6}
                                height={6}
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
                          mr={props.text ? 3 : 0}
                          width={6}
                          height={6}
                          transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                          children={React.cloneElement(props.icon, {
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
