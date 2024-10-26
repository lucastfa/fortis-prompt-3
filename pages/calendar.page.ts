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
    const formatedStartDay:string = parseInt(startDateSplit[2]).toString()
    const formatedStartMonth:string = parseInt(startDateSplit[1]).toString()
    await this.startDaySelect.selectOption(formatedStartDay)
    await this.startMonthSelect.selectOption(formatedStartMonth)
    await this.startYearSelect.selectOption(startDateSplit[0])

    const endDateSplit:string[] = endDate.split('-')
    const formatedEndDay:string = parseInt(endDateSplit[2]).toString()
    const formatedEndMonth:string = parseInt(endDateSplit[1]).toString()
    await this.endDaySelect.selectOption(formatedEndDay)
    await this.endMonthSelect.selectOption(formatedEndMonth)
    await this.endYearSelect.selectOption(endDateSplit[0])

    await this.getDatesButton.click()
  }
}
