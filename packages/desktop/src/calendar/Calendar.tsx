import React, {FC} from 'react'
import {Box, Card, CardProps, Grid, Flex, Icon, Typo, CalendarControl, CalendarUtils, CalendarUtilsProps, CalendarControlChildrenProps, defaultFirstDayIndex} from '@qiwi/pijma-core'
import {SelectScroll} from '../select-scroll'

export interface CalendarProps {
  date?: Date
  dateTo?: Date
  days?: [string, string, string, string, string, string, string]
  months?: [string, string, string, string, string, string, string, string, string, string, string, string]
  firstDayIndex?: number
  isRange?: boolean
  minYear?: number
  maxYear?: number
  calendar?: CalendarUtilsProps
  onChange?: (date: Date) => void
}

export const Calendar: FC<CalendarProps> = ({
  days,
  months,
  firstDayIndex = defaultFirstDayIndex,
  date,
  dateTo,
  isRange = false,
  minYear,
  maxYear,
  calendar = new CalendarUtils(firstDayIndex, date, dateTo),
  onChange,
}) => {
  const getDateItems = (renderProps: CalendarControlChildrenProps) => {
    return renderProps.dates.map(({date, disabled}, key) => {
      const selectedDatesIndex = renderProps.activeDates
        .findIndex(item => item.date.toDateString() === date.toDateString())
      if (selectedDatesIndex !== -1) {
        const cardProps: CardProps = {}
        let typoColor = '#fff'

        switch (selectedDatesIndex) {
          case 0:
            cardProps.bg = '#ff8c00'
            cardProps.rbl = 20
            cardProps.rtl = 20
            break

          case renderProps.activeDates.length - 1:
            cardProps.bg = '#ff8c00'
            cardProps.rbr = 20
            cardProps.rtr = 20
            break

          default:
            cardProps.bg = 'rgba(255,140,0,0.2)'
            typoColor = '#000'
            break
        }

        return (
          <Card
            key={key}
            width={10}
            height={10}
            p={2}
            cursor="pointer"
            onClick={renderProps.onDesktopSelectDate(date)}
            {...cardProps}
          >
            <Typo size={4} weight={300} height={6} color={typoColor} align="center">
              {date.getDate()}
            </Typo>
          </Card>
        )
      }

      switch (date.toDateString()) {
        case renderProps.activeDate && renderProps.activeDate.toDateString():
          return (
            <Card
              key={key}
              width={10}
              height={10}
              p={2}
              bg="#ff8c00"
              r={20}
              cursor="pointer"
              onClick={renderProps.onDesktopSelectDate(date)}
            >
              <Typo size={4} weight={300} height={6} color="#fff" align="center">
                {date.getDate()}
              </Typo>
            </Card>
          )

        case new Date().toDateString():
          return (
            <Card
              key={key}
              width={10}
              height={10}
              p={2}
              bg="#f5f5f5"
              r={20}
              cursor="pointer"
              onClick={renderProps.onDesktopSelectDate(date)}
            >
              <Typo size={4} weight={500} height={6} align="center">
                {date.getDate()}
              </Typo>
            </Card>
          )

        default:
          return (
            <Box key={key} width={10} height={10} p={2}>
              <Typo
                size={4}
                weight={300}
                height={6}
                align="center"
                color={disabled ? '#666' : 'default'}
                cursor={disabled ? 'default' : 'pointer'}
                onClick={renderProps.onDesktopSelectDate(date)}
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
      calendar={calendar}
      days={days}
      months={months}
      isRange={isRange}
      minYear={minYear}
      maxYear={maxYear}
      onChange={onChange}
      children={renderProps => (
        <Box pt={8} px={6} pb={6} css={{'user-select': 'none'}}>
          <Flex justify="space-between" px={2} mb={2}>
            <Box
              cursor="pointer"
              onClick={renderProps.toPrevMonth}
              children={<Icon name="angle-left" />}
            />
            <Box onClick={renderProps.toggleSelectMonth}>
              <Typo display="inline" weight={500} size={4.5} height={6}>
                {renderProps.months[renderProps.date.getMonth()]} {renderProps.date.getFullYear()}
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
                renderProps.months.map((month, key) => ({value: key, text: month})),
                renderProps.years,
              ]}
              onSelect={renderProps.selectMonth}
            />
          ) : (
            <Grid columns={7} layout={1} gutter={0}>
              {renderProps.days.map(day => (
                <Box key={day} width={10} height={10} p={2}>
                  <Typo size={3.5} weight={300} height={5} align="center" color="#666">
                    {day}
                  </Typo>
                </Box>
              ))}
              {getDateItems(renderProps)}
            </Grid>
          )}
        </Box>
      )}
    />
  )
}
