import React, {FC, ReactNode, KeyboardEvent, Fragment, FunctionComponent} from 'react'
import {styled, Box, Icon, InputField, BasicInput, DatePickerControl, Pipe, Typo, Striper, Modal, ModalProps, SimpleTransitionProps, SimpleTransition, Pos, Card, CalendarUtilsProps} from '@qiwi/pijma-core'
import {css} from 'emotion'
import {Calendar} from '../'

export interface DatePickerProps {
  value?: Date
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
  calendar?: CalendarUtilsProps
  buttonText?: string
  titleText?: string
  onChange?: (date: Date) => void
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

export const DatePicker: FC<DatePickerProps> = ({
  value,
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
  calendar,
  buttonText,
  titleText = 'Выберите дату',
}) => {
  return (
    <DatePickerControl
      value={value}
      format={format}
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
              active={renderProps.focused || !!value || !!placeholder}
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
                        <Typo weight={500} size={5} height={7}>{titleText}</Typo>
                      </Box>
                      <Fragment>
                        <Calendar
                          calendar={calendar}
                          date={value}
                          buttonText={buttonText}
                          onChange={renderProps.saveDate}
                        />
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
