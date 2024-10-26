import { Locator, Page } from "@playwright/test"

export class ResultPage {

  page:Page
  datesResultLabel: Locator

  constructor(page:Page, numberOfDates:string) {
    this.page = page
    this.datesResultLabel = page.getByText(`Here are your ${numberOfDates} calendar dates:`)
  }
  
  async numberOfDateResults() {
    const results = await this.dateResults()
    return results?.length
  }

  async dateResults() {
    const datesResultContent = await this.datesResultLabel.locator('+ p').textContent()
    return datesResultContent?.split('\n').filter(element => element)
  }

  async dateRangeResultContent() {
    return await this.datesResultLabel.locator('+ p + p').textContent()
  }
}
