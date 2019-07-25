import React, {FunctionComponent, RefObject, createRef} from 'react'
import MaskedInput from 'react-text-mask'

import {
  PhoneFieldControl,
  OptionControl,
  InputField,
  BasicInput,
  Stub,
  Box,
  Pos,
  Card,
  Flex,
  FlexItem,
  CountryCode,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {DropUp} from '../drop-up'
import {flags} from './flags'
import PhoneFieldProps from './PhoneFieldProps'

const PhoneField: FunctionComponent<PhoneFieldProps> = (props) => {
  if (props.stub) {
    return (
      <Box>
        {props.title ? (
          <Stub width={15} height={2} top={1} bottom={1}/>
        ) : (
          <Box height={4}/>
        )}
        <Card bb="1px solid rgba(0, 0, 0, 0.2)" height={7}>
          <Flex align="center" justify="space-between" height={1}>
            <FlexItem>
              <Stub width={38} height={3} top={1} bottom={1}/>
            </FlexItem>
            {props.hint ? (
              <FlexItem>
                <Stub width={5} height={5} r={10}/>
              </FlexItem>
            ) : (
              null
            )}
          </Flex>
        </Card>
        {props.help ? (
          <Stub width={15} height={2} top={2} bottom={1}/>
        ) : (
          <Box height={5}/>
        )}
      </Box>
    )
  }
  const flag: RefObject<HTMLDivElement> = createRef()
  const container: RefObject<HTMLDivElement> = createRef()
  const input: RefObject<MaskedInput> = createRef()
  const options: Map<CountryCode, RefObject<HTMLDivElement>> = new Map(
    props.countries.map((country => [country.code, createRef()])),
  )
  return (
    <PhoneFieldControl
      value={props.value}
      countries={props.countries}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      onCountryEnter={props.onCountryEnter}
      onCountryLeave={props.onCountryLeave}
      inputRef={() => input}
      optionsRefs={options}
      children={(renderProps) => {
        const FlagIcon = flags[renderProps.countryCode]
        return (
          <Pos type="relative" ref={container}>
            <InputField
              title={props.title}
              active={renderProps.focused || !!props.value || !!props.placeholder}
              padded={!!props.hint}
              input={(
                <BasicInput
                  ref={input}
                  type="tel"
                  value={renderProps.value}
                  name={props.name}
                  mask={renderProps.mask}
                  autoComplete={props.autoComplete}
                  autoFocus={props.autoFocus}
                  placeholder={props.placeholder}
                  disabled={props.disabled}
                  padded={!!props.hint}
                  paddedLeft
                  error={!!props.error}
                  focused={renderProps.focused}
                  maxLength={props.maxLength}
                  pipe={props.pipe}
                  onChange={renderProps.onChange}
                  onFocus={renderProps.onFocus}
                  onBlur={renderProps.onBlur}
                  onKeyDown={renderProps.onKeyDown}
                  onKeyUp={renderProps.onKeyUp}
                />
              )}
              hint={props.hint}
              icon={(
                <Box
                  ref={flag}
                  cursor="pointer"
                  width={6}
                  height={6}
                  onClick={renderProps.onFlagClick}
                  onMouseDown={renderProps.onFlagMouseDown}
                  children={(<FlagIcon/>)}
                />
              )}
              error={props.error}
              help={props.help}
              action={props.action}
            />
            <DropUp
              title="Код страны"
              autoFocus={false}
              show={renderProps.showCountries}
              onHide={() => renderProps.onCountriesHide()}
            >
              {renderProps.options.map((option, index) => (
                <OptionControl<CountryCode>
                  key={index}
                  value={option.code}
                  onClick={() => renderProps.selectCountry(option.code)}
                  onMouseEnter={() => renderProps.onCountryEnter(option.code)}
                  onMouseLeave={() => renderProps.onCountryLeave(option.code)}
                  children={(renderOptionProps) => {
                    const OptionIcon = flags[option.code]
                    return (
                      <Card
                        ref={options.get(option.code)}
                        width={1}
                        px={6}
                        boxSizing="content-box"
                        cursor="pointer"
                        onClick={renderOptionProps.onClick}
                        onMouseEnter={renderOptionProps.onMouseEnter}
                        onMouseLeave={renderOptionProps.onMouseLeave}
                        bg={option.code === renderProps.countryCode ?
                          '#E6E6E6' : option.code === renderProps.selected ?
                          '#F5F5F5' : '#FFF'
                        }
                      >
                        <Flex py={3} align="center">
                          <FlexItem shrink={1} mr={3}>
                            <Box width={5} height={5}>
                              <OptionIcon/>
                            </Box>
                          </FlexItem>
                          <FlexItem width={16} shrink={1}>
                            <Paragraph>
                              {`+${option.mask.replace(/\D/g, '')}`}
                            </Paragraph>
                          </FlexItem>
                          <Paragraph>
                            {option.name}
                          </Paragraph>
                        </Flex>
                      </Card>
                    )
                  }}
                />
              ))}
            </DropUp>
          </Pos>
        )
      }}
    />
  )
}

PhoneField.defaultProps = {
  tabIndex: 0,
}

export default PhoneField
