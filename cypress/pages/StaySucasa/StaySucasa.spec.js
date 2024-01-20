let locators = {}
let dataFile = {}
const locatorsFilePath = "cypress/pages/StaySucasa/StaySucasa-locators.json"
const dataFilePath = "cypress/fixtures/StaySucasa/StaySucasa.json"

class StaySucasa {

    /**
     * this method will read data and locator files
     */
    readDataAndLocatorFiles() {
        cy.readFile(locatorsFilePath).then((obj) => {
            locators = obj
        })
        cy.readFile(dataFilePath).then((obj) => {
            dataFile = obj
        })
    }

    /**
     * this metod will visit the HomePage of StaySucasa Web App
     */
    visitHomePage() {
        cy.visit('/')
    }

    /**
     * this method will assert the text of specified element
     * @param {string} locatorAndDataKey key to pass locator and text value to be asserted
     */
    assertElementText(locatorAndDataKey) {
        cy.get(locators[locatorAndDataKey]).scrollIntoView().should('have.text', dataFile[locatorAndDataKey])
    }

    /**
     * this method will scroll the page to Work From Anywhere section
     */
    workFromAnyWhereSection() {
        cy.get(locators.workFromAnyWhereSection).scrollIntoView()
    }

    /**
     * this method will verify the Url
     */
    verifyURL() {
        cy.url({ timeout: dataFile.midWaitTime }).then((pageUrl) => {
            const actualURL = pageUrl.replace(/\/$/, '');
            expect(actualURL).to.eq(dataFile.baseUrl)
        })
    }

    /**
     * this method will take the screenshot of the page
     * and save it named as FIRST_HH-MM-SS according to PK standard time
     */
    takeScreenshot() {
        const localTime = { hours12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Karachi' }
        const timeStamp = new Date().toLocaleTimeString('en-PK', localTime)
        const screenshotName = `FIRST_${timeStamp.replace(/:/g, '-')}`
        cy.screenshot(screenshotName)
    }

} export const staysucasa = new StaySucasa()