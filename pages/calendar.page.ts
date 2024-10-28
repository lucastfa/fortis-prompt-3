import { Locator, Page } from "@playwright/test"

export class CalendarPage {

  page:Page
  numberOfDatesInput:Locator
  startDaySelect:Locator
  startMonthSelect:Locator
  startYearSelect:Locator
  endDaySelect:Locator
  endMonthSelect:Locator
  endYearSelect:Locator
  getDatesButton:Locator

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

  async generateDates(numberOfDates:string, startDate:string, endDate:string) {
    await this.numberOfDatesInput.fill(numberOfDates)

    const startDateSplit:string[] = startDate.split('-')
    await this.startDaySelect.selectOption(this.trimLeadingZeros(startDateSplit[2]))
    await this.startMonthSelect.selectOption(this.trimLeadingZeros(startDateSplit[1]))
    await this.startYearSelect.selectOption(startDateSplit[0])

    const endDateSplit:string[] = endDate.split('-')
    await this.endDaySelect.selectOption(this.trimLeadingZeros(endDateSplit[2]))
    await this.endMonthSelect.selectOption(this.trimLeadingZeros(endDateSplit[1]))
    await this.endYearSelect.selectOption(endDateSplit[0])

    await this.getDatesButton.click()
  }

  trimLeadingZeros(number:string) {
    return parseInt(number).toString()
  }
}
