const {By} = require ('selenium-webdriver')

module.exports = {
    
    addMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')

        await driver.findElement(By.xpath('//button')).click()

        const movie = await driver.findElement(By.xpath('//li'))

        const displayed = movie.isDisplayed()

        expect(displayed).toBeTruthy()
    },

    findX: async (driver) => {
        const xButton = await driver.findElement(By.xpath('//li/button')).getText()
        
        expect(xButton).toBe('x')  
        await driver.sleep(1000)
    },

    deleteMovie: async (driver) => {
        const xButton = await driver.findElement(By.xpath('//li/button')).click()

        expect(xButton).toEqual(null)

        await driver.sleep(1000)
    },
    notificationVerification: async (driver) => {
        const verify = await driver.findElement(By.xpath('//aside')).getText()
        
        // const movie = await driver.findElement(By.xpath('//li'))

        // const displayed = movie.isDisplayed()

        expect(verify).toContain('deleted!')

        }
}