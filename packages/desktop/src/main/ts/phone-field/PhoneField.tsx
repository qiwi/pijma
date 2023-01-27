import {
  BasicInput,
  Box,
  Card,
  Flag,
  Flex,
  FlexItem,
  getDataProps,
  InputField,
  MenuControl,
  PhoneFieldControl,
  Pos,
} from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { DropDown } from '../drop-down'
import { Paragraph } from '../typography'
import { PhoneFieldProps } from './PhoneFieldProps'

export const PhoneField: FC<PhoneFieldProps> = ({
  tabIndex = 0,
  code = 'ru',
  ...props
}) =>
  props.stub ? (
    <InputField
      stub
      input={false}
      active={false}
      title={props.title}
      help={props.help}
      hint={props.hint}
      icon="icon"
    />
  ) : (
    <PhoneFieldControl
      value={props.value}
      countries={props.countries}
      hideOnBlur={true}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      children={(renderProps) => (
        <MenuControl
          count={props.countries.length}
          onSelect={renderProps.onSelectCountry}
          children={(menuRenderProps) => (
            <Pos
              {...getDataProps(props)}
              type="relative"
              ref={renderProps.containerRef}
            >
              <InputField
                title={props.title}
                active={
                  renderProps.focused || !!props.value || !!props.placeholder
                }
                input={
                  <BasicInput
                    ref={renderProps.inputRef}
                    type="tel"
                    value={renderProps.value}
                    name={props.name}
                    mask={renderProps.mask}
                    autoComplete={props.autoComplete}
                    autoFocus={props.autoFocus}
                    placeholder={props.placeholder}
                    inputMode={props.inputMode}
                    disabled={props.disabled}
                    pr={props.hint ? 7 : undefined}
                    pl={9}
                    error={!!props.error}
                    focused={renderProps.focused}
                    maxLength={props.maxLength}
                    onChange={renderProps.onChange}
                    onFocus={renderProps.onFocus}
                    onBlur={renderProps.onBlur}
                    onKeyDown={
                      renderProps.showCountries
                        ? menuRenderProps.onKeyDown
                        : undefined
                    }
                  />
                }
                hint={props.hint}
                icon={
                  <Box
                    cursor="pointer"
                    width={6}
                    height={4}
                    my={1}
                    onClick={renderProps.onFlagClick}
                    onMouseDown={renderProps.onFlagMouseDown}
                    children={<Flag code={renderProps.code || code} />}
                  />
                }
                error={props.error}
                help={props.help}
                action={props.action}
              />
              <DropDown
                minWidth={1}
                offset={4}
                container={() => renderProps.containerRef.current}
                target={() => renderProps.inputRef.current!}
                show={renderProps.showCountries}
                onHide={renderProps.onCountriesHide}
              >
                <Card
                  ref={menuRenderProps.containerRef}
                  s="0 28px 52px 0 rgba(0, 0, 0, 0.16)"
                  bg="#fff"
                  r={10}
                  py={3}
                  minWidth={1}
                  maxHeight={110}
                  overflow="auto"
                  mx={-6}
                >
                  {menuRenderProps.items.map((country, index) => (
                    <Card
                      key={index}
                      ref={country.ref}
                      px={6}
                      cursor="pointer"
                      bg={
                        country.selected
                          ? '#E6E6E6'
                          : country.focused
                          ? '#F5F5F5'
                          : '#FFF'
                      }
                      onClick={country.onClick}
                      onMouseEnter={country.onMouseEnter}
                    >
                      <Flex py={3} align="center" wrap="nowrap">
                        <FlexItem shrink={0} mr={3}>
                          <Box width={6} height={4} my={1}>
                            <Flag code={props.countries[index].code} />
                          </Box>
                        </FlexItem>
                        <FlexItem width={16} shrink={0}>
                          <Paragraph bold>
                            {`+${props.countries[index].mask.replace(
                              /\D/g,
                              '',
                            )}`}
                          </Paragraph>
                        </FlexItem>
                        <FlexItem shrink={0}>
                          <Paragraph bold>
                            {props.countries[index].name}
                          </Paragraph>
                        </FlexItem>
                      </Flex>
                    </Card>
                  ))}
                </Card>
              </DropDown>
            </Pos>
          )}
        />
      )}
    />
  )

PhoneField.displayName = 'PhoneField'

PhoneField.defaultProps = {
  tabIndex: 0,
  code: 'ru',
}
