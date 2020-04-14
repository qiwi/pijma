import React, {FC, Fragment} from 'react'
import {Box, Card, CardProps, Grid, Flex, Icon, Typo, CalendarControl, CalendarUtils, CalendarUtilsProps, CalendarControlChildrenProps, defaultFirstDayIndex} from '@qiwi/pijma-core'
import {SelectScroll} from '../select-scroll'
import {Button} from '../button'

export interface CalendarProps {
  date?: Date
  dateTo?: Date
  days?: [string, string, string, string, string, string, string]
  months?: [string, string, string, string, string, string, string, string, string, string, string, string]
  firstDayIndex?: number
  buttonText?: string
  isRange?: boolean
  minYear?: number
  maxYear?: number
  calendar?: CalendarUtilsProps
  saveDate?: (date: Date) => void
}

export const Calendar: FC<CalendarProps> = ({
  days,
  months,
  firstDayIndex = defaultFirstDayIndex,
  date,
  dateTo,
  isRange = false,
  buttonText = 'Выбрать',
  minYear,
  maxYear,
  calendar = new CalendarUtils(firstDayIndex, date, dateTo),
  saveDate,
}) => {
  const getDateItems = (renderProps: CalendarControlChildrenProps) => {
    return renderProps.dates.map(({date, disabled}, key) => {
      const selectedDatesIndex = renderProps.activeDates
        .findIndex(item => item.date.toDateString() === date.toDateString())
      if (selectedDatesIndex !== -1 && isRange) {
        const cardProps: CardProps = {}
        let typoColor = '#fff'

        switch (selectedDatesIndex) {
          case 0:
            cardProps.bg = '#ff8c00'
            cardProps.rbl = 22
            cardProps.rtl = 22
            break

          case renderProps.activeDates.length - 1:
            cardProps.bg = '#ff8c00'
            cardProps.rbr = 22
            cardProps.rtr = 22
            break

          default:
            cardProps.bg = 'rgba(255,140,0,0.2)'
            typoColor = '#000'
            break
        }

        return (
          <Card
            key={key}
            width={1}
            height={11}
            p={2.5}
            onClick={renderProps.onMobileSelectDate(date)}
            {...cardProps}
          >
            <Typo size={4} weight={300} height={6} color={typoColor} align="center" css={{'user-select': 'none'}}>
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
              width={11}
              height={11}
              p={2.5}
              bg="#ff8c00"
              r={22}
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
      calendar={calendar}
      days={days}
      months={months}
      isRange={isRange}
      minYear={minYear}
      maxYear={maxYear}
      saveDate={saveDate}
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
            <Box p={3.5}>
              <Grid columns={7} layout={1} gutter={0}>
                {renderProps.days.map(day => (
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
