import { test, expect } from '@playwright/test';
import { CalendarPage } from '../pages/calendar.page'
import { ResultPage } from '../pages/result.page'


test('get a date', async ({ page }) => {
  const homePage = new CalendarPage(page)
  await homePage.open()
  await homePage.getDates('4', '2024-1-5', '2025-11-25')

  const resultPage = new ResultPage(page)
})
