import React, {FC} from 'react'
import {Pos, Box, Card, Block, Grid, Flex, Icon, Typo, CalendarControl, CalendarConstructor, CalendarControlChildrenProps} from '@qiwi/pijma-core'
import {BlockContent, MenuLink} from '../'

const defaultDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const defaultMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const defaultFirstDayIndex = 1

export interface CalendarProps {
  activeDate?: Date
  days?: string[]
  months?: string[]
  firstDayIndex?: number
  saveDate?: (date: Date) => void
}

export const Calendar: FC<CalendarProps> = props => {
  const days = props.days || defaultDays
  const months = props.months || defaultMonths
  const firstDayIndex = props.firstDayIndex === undefined ? defaultFirstDayIndex : props.firstDayIndex

  const getDateItems = (renderProps: CalendarControlChildrenProps) => {
    return renderProps.dates.map(({date, disabled}, key) => {
      switch (date.toDateString()) {
        case renderProps.activeDate && renderProps.activeDate.toDateString():
          return (
            <Pos key={key} type="absolute">
              <Card
                width={10}
                height={10}
                mt={-2}
                ml={-2}
                p={2}
                bg="#ff8c00"
                r={20}
                cursor="pointer"
                onClick={renderProps.onDesktopSelectDate(date)}
              >
                <Typo size={4} weight={300} height={6} color="#fff" align="center" css={{'user-select': 'none'}}>
                  {date.getDate()}
                </Typo>
              </Card>
            </Pos>
          )

        case new Date().toDateString():
          return (
            <Pos key={key} type="absolute">
              <Card
                width={10}
                height={10}
                mt={-2}
                ml={-2}
                p={2}
                bg="#f5f5f5"
                r={20}
                cursor="pointer"
                onClick={renderProps.onDesktopSelectDate(date)}
              >
                <Typo size={4} weight={500} height={6} align="center" css={{'user-select': 'none'}}>
                  {date.getDate()}
                </Typo>
              </Card>
            </Pos>
          )

        default:
          return (
            <Typo
              key={key}
              size={4}
              weight={300}
              height={6}
              align="center"
              color={disabled ? '#666' : 'default'}
              cursor={disabled ? 'default' : 'pointer'}
              onClick={renderProps.onDesktopSelectDate(date)}
              css={{'user-select': 'none'}}
            >
              {date.getDate()}
            </Typo>
          )
      }
    },
    )
  }

  return (
    <CalendarControl
      calendar={new CalendarConstructor(firstDayIndex, props.activeDate)}
      saveDate={props.saveDate}
      children={renderProps => (
        <Card s="0 28px 52px 0 rgba(0, 0, 0, 0.16)" r={10}>
          <Block>
            <BlockContent indent="s">
              <Flex justify="space-between" mb={4}>
                <Box
                  cursor="pointer"
                  onClick={renderProps.toPrevMonth}
                  children={<Icon name="angle-left" />}
                />
                <Box onClick={renderProps.toggleSelectMonth}>
                  <Typo display="inline" weight={500} size={4.5} height={6} css={{'user-select': 'none'}}>
                    {months[renderProps.month]} {renderProps.year}
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
                <Box maxHeight={91} overflow="auto">
                  {months.map((month, index) => (
                    <MenuLink
                      key={index}
                      title={month}
                      active={index === renderProps.month}
                      onClick={() => renderProps.selectMonth(index)}
                    />
                  ))}
                </Box>
              ) : (
                <Grid columns={7} layout={1} gutter={16}>
                  {days.map(day => (
                    <Typo key={day} size={3.5} weight={300} height={5} align="center" color="#666" css={{'user-select': 'none'}}>
                      {day}
                    </Typo>
                  ))}
                  {getDateItems(renderProps)}
                </Grid>
              )}
            </BlockContent>
          </Block>
        </Card>
      )}
    />
  )
}
