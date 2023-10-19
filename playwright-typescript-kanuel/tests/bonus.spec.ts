import { test, expect } from '@playwright/test'
import { loadHomepage, assertTitle } from '../helpers'



test.describe('bonus', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://m-casino-stg.verajohn.com')
  })


  test('verjohn', async ({ page }) => {

    await page.click("(//span[@class='top-bar'])[1]")
    await page.click('#main-navigation .show-register-panel')
    

  })
})

