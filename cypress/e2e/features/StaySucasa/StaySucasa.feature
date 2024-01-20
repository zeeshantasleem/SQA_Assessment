Feature: SQA Engineer Assessment Task - Staysucasa Web App

    Scenario: Verify Sucasa Standard Actions
        When I read Data and Locator files
        And I visit StaySucasa Home Page
        Then I verify 'workFromAnyWhereText' text on StaySucasa Home page
        And I verify 'transparentPricingText' text on StaySucasa Home page
        And I verify 'premiumPropertiesText' text on StaySucasa Home page
        When I go to Work From Anywhere Section
        Then I verify page URL
        When I take the screenshot of web page and save it