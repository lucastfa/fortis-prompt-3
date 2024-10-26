import { test, expect } from '@playwright/test';
import { CalendarPage } from '../pages/calendar.page'
import { ResultPage } from '../pages/result.page'


test('get dates in interval', async ({ page }) => {
  const numberOfDates:string = '4'

  const homePage = new CalendarPage(page)
  await homePage.open()
  await homePage.getDates(numberOfDates, '2024-1-5', '2025-11-25')

  const resultPage = new ResultPage(page, numberOfDates)
  expect(await resultPage.numberOfDateResults()).toBe(parseInt(numberOfDates))
  expect(await resultPage.dateRangeResultContent()).toContain('dates between 2024-01-05 and 2025-11-25')
})
