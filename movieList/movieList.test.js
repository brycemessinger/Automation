const {Builder, Capabilities} = require('selenium-webdriver')
const {By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const{addMovie} = require('./testfunctions')
const{findX} = require('./testfunctions')
const{deleteMovie} = require('./testfunctions')
const{notificationVerification} = require('./testfunctions')


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('', () => {

    test('Add a movie', async () => {
        await addMovie(driver)
    
        await driver.sleep(1000)
    }),

    test('Find "X" delete button nex to movie', async () => {
        await findX(driver)
    })

    test('Delete a movie', async () => {
        await deleteMovie(driver)
    })
    
    test('verify notification appears', async () => {
        await notificationVerification(driver) 
    })
    
    
})