import { test } from '@playwright/test'
import { HomePage } from './035_HomePage'
import { LoginPage } from './035b_LoginPage'
import { PaymentPage } from './042_PaymentPage'
import { Navbar } from './041_Navbar'

test.describe('New Payment', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let paymentPage: PaymentPage
  let navbar: Navbar

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    paymentPage = new PaymentPage(page)
    navbar = new Navbar(page)

    
    homePage.visit()
    homePage.clickOnSignIn()
    loginPage.login('username', 'password')
  })

  test('Should send new payment', async ({ page }) => {
    navbar.clickOnTab('Pay Bills')
    await paymentPage.createPayment()
    await paymentPage.assertSuccessMessage()
  })
})
