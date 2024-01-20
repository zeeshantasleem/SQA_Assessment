import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { staysucasa } from "../../../pages/StaySucasa/StaySucasa.spec"

When("I read Data and Locator files", () => [
    staysucasa.readDataAndLocatorFiles()
])

When("I visit StaySucasa Home Page", () => {
    staysucasa.visitHomePage()
})

Then("I verify {string} text on StaySucasa Home page", (locatorKey, textValue) => {
    staysucasa.assertElementText(locatorKey, textValue)
})

When("I go to Work From Anywhere Section", () => {
    staysucasa.workFromAnyWhereSection()
})
// When("I click on {string} on StaySucasa Home Page", (locatorKey) => {
//     staysucasa.buttonClick(locatorKey)
// })

Then("I verify page URL", () => {
    staysucasa.verifyURL()
})

When("I take the screenshot of web page and save it", () => {
    staysucasa.takeScreenshot()
})