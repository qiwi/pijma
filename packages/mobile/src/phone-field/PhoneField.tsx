import React, {createRef, FunctionComponent, RefObject} from 'react'

import {
  PhoneFieldControl,
  InputField,
  BasicInput,
  Stub,
  Box,
  Pos,
  Card,
  Flex,
  FlexItem,
  Flag, MenuControl,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {DropUp} from '../drop-up'
import PhoneFieldProps from './PhoneFieldProps'

const dropDownContainerRef: RefObject<HTMLDivElement> = createRef()

const PosCard = Card.withComponent(Pos)

export const PhoneField: FunctionComponent<PhoneFieldProps> = ({
  tabIndex = 0,
  defaultCode = 'ru',
  ...props
}) => (
  props.stub ? (
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
                padded={!!props.hint}
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
                    children={(<Flag code={renderProps.code || defaultCode}/>)}
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
  defaultCode: 'ru',
}
