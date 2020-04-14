import React, {FC, ReactNode, KeyboardEvent, Fragment, FunctionComponent} from 'react'
import {styled, Box, Icon, InputField, BasicInput, DateRangeControl, Pipe, Typo, Striper, Modal, ModalProps, SimpleTransitionProps, SimpleTransition, Pos, Card, DateRanges, defaultMonths, DateRangesKeys, dateRanges, Flex, FlexItem} from '@qiwi/pijma-core'
import {css} from 'emotion'
import {Calendar, MenuLink} from '../'

export interface DateRangeProps {
  value?: Date | null
  valueTo?: Date | null
  tabIndex?: number
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  format?: string
  pipe?: Pipe
  stub?: boolean
  days?: [string, string, string, string, string, string, string]
  months?: [string, string, string, string, string, string, string, string, string, string, string, string]
  firstDayIndex?: number
  buttonText?: string
  onChange?: (dateFrom: Date | null, dateTo: Date | null) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}

const contentTransition: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

contentTransition.defaultProps = {
  timeout: {
    enter: 370,
    exit: 250,
  },
  enterClassName: (timeout: number) => css({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
  }),
  exitClassName: (timeout: number) => css({
    opacity: 0,
    transform: 'translate3d(0, -100%, 0)',
    transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
  }),
}

const StyledModal = styled(Modal)<ModalProps>({
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  overflow: 'auto',
})

export const DateRange: FC<DateRangeProps> = ({
  value,
  valueTo,
  format = 'yyyy-MM-dd',
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onChange,
  title,
  placeholder,
  name,
  autoComplete,
  autoFocus,
  disabled,
  error,
  maxLength,
  pipe,
  help,
  action,
  days,
  months = defaultMonths,
  firstDayIndex,
  buttonText,
}) => {
  return (
    <DateRangeControl
      value={value}
      valueTo={valueTo}
      format={format}
      isRange
      months={months}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onChange={onChange}
      children={renderProps => (
        <Fragment>
          <Box onClick={renderProps.openCalendar}>
            <InputField
              title={title}
              active={renderProps.focused || !!value || value === null || !!placeholder}
              input={(
                <BasicInput
                  type="text"
                  value={renderProps.value}
                  name={name}
                  autoComplete={autoComplete}
                  autoFocus={autoFocus}
                  placeholder={placeholder}
                  disabled={disabled}
                  pr={7}
                  error={!!error}
                  focused={renderProps.focused}
                  maxLength={maxLength}
                  mask={renderProps.mask}
                  pipe={pipe}
                  onChange={renderProps.onChange}
                  onFocus={renderProps.onFocus}
                  onBlur={renderProps.onBlur}
                  onKeyDown={renderProps.onKeyDown}
                  onKeyUp={renderProps.onKeyUp}
                />
              )}
              hint={(
                <Box
                  cursor="pointer"
                  children={<Icon name="calendar" />}
                />
              )}
              error={error}
              help={help}
              action={action}
            />
          </Box>
          <StyledModal
            show={renderProps.focused}
            onHide={renderProps.closeCalendar}
            transition={contentTransition}
            children={(
              <Pos type="relative" width={1} height={1}>
                <Card bg="#fff" width={1} height={1} overflow="auto">
                  <Fragment>
                    <Pos
                      type="absolute"
                      top={4}
                      right={6}
                      width={6}
                      height={6}
                      cursor="pointer"
                      onClick={renderProps.closeCalendar}
                      children={<Icon name="cross" color="#000"/>}
                    />
                    <Striper>
                      <Box p="16px 48px 16px 24px">
                        {!renderProps.activeRange || renderProps.activeRange !== DateRanges.range
                          ? <Typo weight={500} size={5} height={7}>Период</Typo>
                          : (
                            <Flex justify="space-between" onClick={renderProps.changeActiveRange()}>
                              <FlexItem><Icon name="arrow-left" color="#000"/></FlexItem>
                              <FlexItem><Typo weight={500} size={5} height={7}>{renderProps.activeRange}</Typo></FlexItem>
                              <FlexItem />
                            </Flex>
                          )
                        }
                      </Box>
                      <Fragment>
                        {!renderProps.activeRange || renderProps.activeRange !== DateRanges.range ? (
                          <Box minWidth={44} pt={3}>
                            {dateRanges.map((key: DateRangesKeys) => {
                              return (
                                <MenuLink
                                  key={key}
                                  title={DateRanges[key]}
                                  active={DateRanges[key] === renderProps.activeRange}
                                  submenu={DateRanges[key] === DateRanges.range}
                                  onClick={renderProps.changeActiveRange(DateRanges[key])}
                                />
                              )
                            })}
                          </Box>
                        ) : null}
                        {renderProps.activeRange === DateRanges.range
                        ? (
                            <Calendar
                              activeDate={value || undefined}
                              activeDateTo={valueTo || undefined}
                              days={days}
                              months={months}
                              buttonText={buttonText}
                              firstDayIndex={firstDayIndex}
                              isRange
                              saveDate={renderProps.saveDate}
                            />
                        )
                        : null}
                      </Fragment>
                    </Striper>
                  </Fragment>
                </Card>
              </Pos>
            )}
          />
        </Fragment>
      )}
    />
  )
}
