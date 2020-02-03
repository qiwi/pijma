import React, {FC, Fragment} from 'react'
import {Box, Card, Grid, Flex, Icon, Typo, CalendarControl, CalendarConstructor, CalendarControlChildrenProps} from '@qiwi/pijma-core'
import {Button, SelectScroll} from '../'

const defaultDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const defaultMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const defaultFirstDayIndex = 1

export interface CalendarProps {
  activeDate?: Date
  days?: string[]
  months?: string[]
  firstDayIndex?: number
  buttonText?: string
  minYear?: number
  maxYear?: number
  saveDate?: (date: Date) => void
}

export const Calendar: FC<CalendarProps> = ({
  days = defaultDays,
  months = defaultMonths,
  firstDayIndex,
  activeDate,
  buttonText = 'Выбрать',
  minYear = new Date().getFullYear() - 5,
  maxYear = new Date().getFullYear() + 5,
  saveDate,
}) => {
  const dayIndex = firstDayIndex === undefined ? defaultFirstDayIndex : firstDayIndex
  const getDateItems = (renderProps: CalendarControlChildrenProps) => {
    return renderProps.dates.map(({date, disabled}, key) => {
      switch (date.toDateString()) {
        case renderProps.activeDate && renderProps.activeDate.toDateString():
          return (
            <Card
              key={key}
              width={11}
              height={11}
              p={2.5}
              bg="#ff8c00"
              r={20}
              cursor="pointer"
            >
              <Typo size={4} weight={300} height={6} color="#fff" align="center" css={{'user-select': 'none'}}>
                {date.getDate()}
              </Typo>
            </Card>
          )

        case new Date().toDateString():
          return (
            <Box key={key} width={11} height={11} p={2.5}>
              <Typo
                size={4}
                weight={500}
                height={6}
                align="center"
                color={disabled ? '#666' : 'default'}
                cursor={disabled ? 'default' : 'pointer'}
                onClick={renderProps.onMobileSelectDate(date)}
                css={{'user-select': 'none'}}
              >
                {date.getDate()}
              </Typo>
            </Box>
          )

        default:
          return (
            <Box key={key} width={11} height={11} p={2.5}>
              <Typo
                size={4}
                weight={300}
                height={6}
                align="center"
                color={disabled ? '#666' : 'default'}
                cursor={disabled ? 'default' : 'pointer'}
                onClick={renderProps.onMobileSelectDate(date)}
                css={{'user-select': 'none'}}
              >
                {date.getDate()}
              </Typo>
            </Box>
          )
      }
    },
    )
  }

  return (
    <CalendarControl
      calendar={new CalendarConstructor(dayIndex, activeDate)}
      saveDate={saveDate}
      minYear={minYear}
      maxYear={maxYear}
      children={renderProps => (
        <Fragment>
          <Flex justify="space-between" mb={3.5} pt={6} px={6}>
            <Box
              cursor="pointer"
              onClick={renderProps.toPrevMonth}
              children={<Icon name="angle-left" />}
            />
            <Box onClick={renderProps.toggleSelectMonth}>
              <Typo display="inline" weight={500} size={4.5} height={6} css={{'user-select': 'none'}}>
                {months[renderProps.date.getMonth()]} {renderProps.date.getFullYear()}
              </Typo>
              <Box
                display="inline"
                cursor="pointer"
                children={<Icon name={renderProps.showSelectMonth ? 'angle-small-up' : 'angle-small-down'} />}
              />
            </Box>
            <Box
              cursor="pointer"
              onClick={renderProps.toNextMonth}
              children={<Icon name="angle-right" />}
            />
          </Flex>
          {renderProps.showSelectMonth ? (
            <SelectScroll
              selected={[
                renderProps.date.getMonth(),
                renderProps.date.getFullYear(),
              ]}
              items={[
                months.map((month, key) => ({value: key, text: month})),
                renderProps.years,
              ]}
              onSelect={renderProps.selectMonth}
            />
          ) : (
            <Box p={3.5}>
              <Grid columns={7} layout={1} gutter={0}>
                {days.map(day => (
                  <Box key={day} width={11} height={11} p={2.5}>
                    <Typo size={3.5} weight={300} height={5} align="center" color="#666" css={{'user-select': 'none'}}>
                      {day}
                    </Typo>
                  </Box>
                ))}
                {getDateItems(renderProps)}
              </Grid>
              <Box px={2.5} pb={2.5} pt={3.5}>
                <Button
                  type="button"
                  kind="brand"
                  size="accent"
                  text={buttonText}
                  onClick={renderProps.onMobileSaveDate}
                />
              </Box>
            </Box>
          )}
        </Fragment>
      )}
    />
  )
}
