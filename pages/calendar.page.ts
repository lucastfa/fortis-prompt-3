import { Locator, Page } from "@playwright/test"

export class CalendarPage {

  page:Page
  numberOfDatesInput:Locator
  getDatesButton:Locator
  startDaySelect:Locator
  startMonthSelect:Locator
  startYearSelect:Locator
  endDaySelect:Locator
  endMonthSelect:Locator
  endYearSelect:Locator

  constructor(page:Page) {
    this.page = page
    this.numberOfDatesInput = page.locator("[name='num']")
    this.startDaySelect = page.locator("[name='start_day']")
    this.startMonthSelect = page.locator("[name='start_month']")
    this.startYearSelect = page.locator("[name='start_year']")
    this.endDaySelect = page.locator("[name='end_day']")
    this.endMonthSelect = page.locator("[name='end_month']")
    this.endYearSelect = page.locator("[name='end_year']")
    this.getDatesButton = page.getByText('Get Dates')
  }
  
  async open() {
    await this.page.goto('/calendar-dates')
  }

  async getDates(numberOfDates:string, startDate:string, endDate:string) {
    await this.numberOfDatesInput.fill(numberOfDates)

    const startDateSplit = startDate.split('-')
    await this.startDaySelect.selectOption(startDateSplit[2])
    await this.startMonthSelect.selectOption(startDateSplit[1])
    await this.startYearSelect.selectOption(startDateSplit[0])

    const endDateSplit = endDate.split('-')
    await this.endDaySelect.selectOption(endDateSplit[2])
    await this.endMonthSelect.selectOption(endDateSplit[1])
    await this.endYearSelect.selectOption(endDateSplit[0])

    await this.getDatesButton.click()
  }
}
