import { test, expect } from '@playwright/test'
import { HomePage } from './035_HomePage'

test.describe('Search Results', () => {
  
  test('Should find search results', async ({ page }) => {
    let homePage: HomePage = new HomePage(page)
    
    await homePage.visit()
    await homePage.searchFor('bank')

    const numberOfLinks = await page.locator('li > a')
    await expect(numberOfLinks).toHaveCount(2)
  })
})
