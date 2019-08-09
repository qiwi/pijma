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
  Flag,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {DropDown} from '../drop-down'
import PhoneFieldProps from './PhoneFieldProps'

export const PhoneField: FunctionComponent<PhoneFieldProps> = (props) => {
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
            <FlexItem shrink={1} mr={3}>
              <Stub width={6} height={4} top={1} bottom={1} r={0}/>
            </FlexItem>
            <FlexItem grow={1}>
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
  const dropdown: RefObject<HTMLDivElement> = createRef()
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
      dropdownRef={() => dropdown}
      optionsRefs={options}
      children={(renderProps) => (
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
                mask={renderProps.getMask}
                autoComplete={props.autoComplete}
                autoFocus={props.autoFocus}
                placeholder={props.placeholder}
                disabled={props.disabled}
                pr={props.hint ? 7 : undefined}
                pl={9}
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
                height={4}
                my={1}
                onClick={renderProps.onFlagClick}
                onMouseDown={renderProps.onFlagMouseDown}
                children={(<Flag code={renderProps.countryCode}/>)}
              />
            )}
            error={props.error}
            help={props.help}
            action={props.action}
          />
          <DropDown
            contentRef={dropdown}
            offset={16}
            zIndex={2}
            container={() => container.current}
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
                children={(renderOptionProps) => (
                  <Card
                    ref={options.get(option.code)}
                    ml={-6}
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
                        <Box width={6} height={4} my={1}>
                          <Flag code={option.code}/>
                        </Box>
                      </FlexItem>
                      <FlexItem width={16} shrink={1}>
                        <Paragraph bold>
                          {`+${option.mask.replace(/\D/g, '')}`}
                        </Paragraph>
                      </FlexItem>
                      <Paragraph bold>
                        {option.name}
                      </Paragraph>
                    </Flex>
                  </Card>
                )}
              />
            ))}
          </DropDown>
        </Pos>
      )}
    />
  )
}

PhoneField.defaultProps = {
  tabIndex: 0,
}
