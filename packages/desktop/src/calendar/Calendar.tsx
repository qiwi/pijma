import React, {FC} from 'react'
import {Box, Card, CardProps, Grid, Flex, Icon, CalendarControl, CalendarUtils, CalendarUtilsProps, CalendarControlChildrenProps} from '@qiwi/pijma-core'
import {SelectScroll} from '../select-scroll'
import {Text} from '../typography'

export interface CalendarProps {
  date?: Date
  dateTo?: Date
  isRange?: boolean
  calendar?: CalendarUtilsProps
  onChange?: (date: Date) => void
}

export const Calendar: FC<CalendarProps> = ({
  date,
  dateTo,
  isRange = false,
  calendar = new CalendarUtils(date, dateTo),
  onChange,
}) => {
  const getDateItems = (renderProps: CalendarControlChildrenProps) => {
    return renderProps.dates.map(({date, disabled}, key) => {
      const selectedDatesIndex = renderProps.activeDates
        .findIndex(item => item.date.toDateString() === date.toDateString())
      if (selectedDatesIndex !== -1) {
        const cardProps: CardProps = {}
        let textColor: 'default' | 'inverse' = 'inverse'

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
            textColor = 'default'
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
            <Text size="m" color={textColor} display="block" align="center" bold={false}>
              {date.getDate()}
            </Text>
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
              <Text size="m" color="inverse" display="block" align="center" bold={false}>
                {date.getDate()}
              </Text>
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
              <Text size="m" display="block" align="center" bold>
                {date.getDate()}
              </Text>
            </Card>
          )

        default:
          return (
            <Box
              key={key}
              width={10}
              height={10}
              p={2}
              cursor={disabled ? 'default' : 'pointer'}
              onClick={renderProps.onDesktopSelectDate(date)}
            >
              <Text size="m" color={disabled ? 'support' : 'default'} display="block" align="center" bold={false}>
                {date.getDate()}
              </Text>
            </Box>
          )
      }
    },
    )
  }

  return (
    <CalendarControl
      calendar={calendar}
      isRange={isRange}
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
              <Text size="m" display="inline" bold>
                {renderProps.months[renderProps.date.getMonth()]} {renderProps.date.getFullYear()}
              </Text>
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
                  <Text size="s" color="support" display="block" align="center" bold={false}>
                    {day}
                  </Text>
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
