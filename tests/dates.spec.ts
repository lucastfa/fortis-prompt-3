import { test, expect } from '@playwright/test';
import { CalendarPage } from '../pages/calendar.page'
import { ResultPage } from '../pages/result.page'

test('get dates in interval', async ({ page }) => {
  const numberOfDatesRequested:string = '4'
  const initialDate:string = '2024-01-05'
  const endDate:string = '2025-11-25'

  const calendarPage = new CalendarPage(page)
  await calendarPage.open()
  await calendarPage.generateDates(numberOfDatesRequested, initialDate, endDate)

  const resultPage = new ResultPage(page, numberOfDatesRequested)
  expect(await resultPage.numberOfDateResults()).toBe(parseInt(numberOfDatesRequested))
  expect(await resultPage.dateRangeResultContent()).toContain(`dates between ${initialDate} and ${endDate}`)
})
