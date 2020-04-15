import React, {FC} from 'react'
import {Box, Card, CardProps, Grid, Flex, Icon, CalendarControl, CalendarUtils, CalendarControlChildrenProps} from '@qiwi/pijma-core'
import {SelectScroll} from '../select-scroll'
import {Button} from '../button'
import {Text} from '../typography'

export interface CalendarProps {
  date?: Date
  dateTo?: Date
  buttonText?: string
  isRange?: boolean
  utils: CalendarUtils
  minDate?: Date
  maxDate?: Date
  onChange?: (date: Date) => void
}

export const Calendar: FC<CalendarProps> = ({
  date,
  dateTo,
  isRange = false,
  buttonText = 'Выбрать',
  utils,
  minDate = new Date('1900-01-01'),
  maxDate = new Date('2100-01-01'),
  onChange,
}) => {
  const getDateItems = (renderProps: CalendarControlChildrenProps) => {
    return renderProps.dates.map(({date, disabled}, key) => {
      const selectedDatesIndex = renderProps.activeDates
        .findIndex(item => item.date.toDateString() === date.toDateString())
      if (selectedDatesIndex !== -1 && isRange) {
        const cardProps: CardProps = {}
        let textColor: 'default' | 'inverse' = 'inverse'

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
            textColor = 'default'
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
              width={11}
              height={11}
              p={2.5}
              bg="#ff8c00"
              r={22}
              cursor="pointer"
            >
              <Text size="m" color="inverse" display="block" align="center" bold={false}>
                {date.getDate()}
              </Text>
            </Card>
          )

        case new Date().toDateString():
          return (
            <Box
              key={key}
              width={11}
              height={11}
              p={2.5}
              cursor={disabled ? 'default' : 'pointer'}
              onClick={renderProps.onMobileSelectDate(date)}
            >
              <Text size="m" color={disabled ? 'support' : 'default'} display="block" align="center" bold>
                {date.getDate()}
              </Text>
            </Box>
          )

        default:
          return (
            <Box
              key={key}
              width={11}
              height={11}
              p={2.5}
              cursor={disabled ? 'default' : 'pointer'}
              onClick={renderProps.onMobileSelectDate(date)}
            >
              <Text size="s" color={disabled ? 'support' : 'default'} display="block" align="center" bold={false}>
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
      utils={utils}
      date={date}
      dateTo={dateTo}
      isRange={isRange}
      minDate={minDate}
      maxDate={maxDate}
      onChange={onChange}
      children={renderProps => (
        <Box css={{'user-select': 'none'}}>
          <Flex justify="space-between" mb={3.5} pt={6} px={6}>
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
            <Box p={3.5}>
              <Grid columns={7} layout={1} gutter={0}>
                {renderProps.days.map(day => (
                  <Box key={day} width={11} height={11} p={2.5}>
                    <Text size="s" color="support" display="block" align="center" bold={false}>
                      {day}
                    </Text>
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
        </Box>
      )}
    />
  )
}
