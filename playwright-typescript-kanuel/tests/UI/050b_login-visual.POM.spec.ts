import { test } from '@playwright/test'
import { LoginPage } from './035b_LoginPage'
import { HomePage } from './035_HomePage'

test.describe('Login Page Visual Tests', () => {
  let homepage: HomePage
  let loginpage: LoginPage

  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page)
    loginpage = new LoginPage(page)

    
    await homepage.visit()
    await homepage.clickOnSignIn()
  })

  test('Login Form', async ({ page }) => {
    await loginpage.snapshotLoginForm()
  })

  test.only('Login Error Message', async ({ page }) => {
    await loginpage.login('Fail', 'some invalid password')
    //await loginpage.snapshotErrorMessage()
  })
})
