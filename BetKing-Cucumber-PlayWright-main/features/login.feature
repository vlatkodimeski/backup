Feature: Login

#  Scenario Outline: BetKing Login - Create New Account
#    Given User launched eshop login page
#    When User create account with "<username>", "<password>"
#    Then User account should get created
#
#  Examples:
#      | username   | password  |
#      | QATestOnline-2      | ChangeMe1247!     |

  Scenario Outline: Login to the BetKing Application
    Given User launched BetKing login page
    When User logged in BetKing using the valid username "<username>" and the valid password "<password>"
    Then user should see a BetKing welcome text

    Examples:
      | username   | password  |
      | QATestOnline      | TFNeQbEn5Y6du7C     |

  Scenario Outline: Login to the BetKing Application with Wrong Password
    Given User launched BetKing login page
    When User logged in Betking using the invalid username "<username>" and the invalid password "<password>"
    Then User should not get logged in

    Examples:
      | username                    | password  |
      | test.com | Testing$1 |