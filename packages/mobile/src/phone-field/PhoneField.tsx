import React, {createRef, FunctionComponent, RefObject} from 'react'

import {
  PhoneFieldControl,
  InputField,
  BasicInput,
  Box,
  Pos,
  Card,
  Flex,
  FlexItem,
  Flag,
  MenuControl,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {DropUp} from '../drop-up'
import PhoneFieldProps from './PhoneFieldProps'

const dropDownContainerRef: RefObject<HTMLDivElement> = createRef()

const PosCard = Card.withComponent(Pos)

export const PhoneField: FunctionComponent<PhoneFieldProps> = ({
  tabIndex = 0,
  code = 'ru',
  ...props
}) => (
  props.stub ? (
    <InputField
      stub
      active={false}
      input={false}
      title={props.title}
      help={props.help}
      hint={props.hint}
      icon="icon"
    />
  ) : (
    <PhoneFieldControl
      value={props.value}
      countries={props.countries}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      children={(renderProps) => (
        <MenuControl
          count={props.countries.length}
          onSelect={renderProps.onSelectCountry}
          children={(menuRenderProps) => (
            <Pos type="relative" ref={dropDownContainerRef}>
              <InputField
                title={props.title}
                active={renderProps.focused || !!props.value || !!props.placeholder}
                input={(
                  <BasicInput
                    ref={renderProps.inputRef}
                    type="tel"
                    value={renderProps.value}
                    name={props.name}
                    mask={renderProps.mask}
                    autoComplete={props.autoComplete}
                    autoFocus={props.autoFocus}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    pr={props.hint ? 7 : undefined}
                    pl={9}
                    error={!!props.error}
                    focused={renderProps.focused}
                    maxLength={props.maxLength}
                    onChange={renderProps.onChange}
                    onFocus={renderProps.onFocus}
                    onBlur={renderProps.onBlur}
                    onKeyDown={menuRenderProps.onKeyDown}
                  />
                )}
                hint={props.hint}
                icon={(
                  <Box
                    cursor="pointer"
                    width={6}
                    height={4}
                    my={1}
                    onClick={renderProps.onFlagClick}
                    onMouseDown={renderProps.onFlagMouseDown}
                    children={(<Flag code={renderProps.code || code}/>)}
                  />
                )}
                error={props.error}
                help={props.help}
                action={props.action}
              />
              <DropUp
                title="Код страны"
                show={renderProps.showCountries}
                autoFocus
                onKeyDown={menuRenderProps.onKeyDown}
                onHide={renderProps.onCountriesHide}
              >
                <PosCard ref={menuRenderProps.containerRef} type="relative" height={1} overflow="auto">
                  {menuRenderProps.items.map((country, index) => (
                    <Card
                      key={index}
                      ref={country.ref}
                      width={1}
                      px={6}
                      cursor="pointer"
                      bg={country.selected ? '#E6E6E6' : country.focused ? '#F5F5F5' : '#FFF'}
                      onClick={country.onClick}
                      onMouseEnter={country.onMouseEnter}
                    >
                      <Flex py={3} align="center">
                        <FlexItem shrink={1} mr={3}>
                          <Box width={6} height={4} my={1}>
                            <Flag code={props.countries[index].code}/>
                          </Box>
                        </FlexItem>
                        <FlexItem width={16} shrink={1}>
                          <Paragraph bold>
                            {`+${props.countries[index].mask.replace(/\D/g, '')}`}
                          </Paragraph>
                        </FlexItem>
                        <Paragraph bold>
                          {props.countries[index].name}
                        </Paragraph>
                      </Flex>
                    </Card>
                  ))}
                </PosCard>
              </DropUp>
            </Pos>
          )}
        />
      )}
    />
  ))

PhoneField.defaultProps = {
  tabIndex: 0,
  code: 'ru',
}
