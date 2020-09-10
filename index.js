const { Builder, By, Key, until, WebElement, } = require('selenium-webdriver');
const faker = require('faker');

const firstName = faker.name.firstName();
const momLastName = faker.name.lastName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const tel1 = faker.phone.phoneNumber();
const tel2 = faker.phone.phoneNumber();
const tel3 = faker.phone.phoneNumber();
const address = faker.address.streetName();
const addressNum = faker.random.number();
const negativo = 'NO';

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('http://minsal-covid19-qa-s3bucket-rjdee0hq5oem.s3-website-us-east-1.amazonaws.com/eleam.html');
        await driver.findElement(By.id('apellidopaterno')).sendKeys(lastName);
        await driver.findElement(By.id('apellidomaterno')).sendKeys(momLastName);
        await driver.findElement(By.id('nombres')).sendKeys(firstName);
        await driver.findElement(By.id('sexo')).sendKeys('MASCULINO');
        await driver.findElement(By.id('fechanacimiento')).sendKeys('28/03/1991', Key.ENTER);
        await driver.findElement(By.id('nacionalidad')).sendKeys('CHILE');
        await driver.findElement(By.id('documentodeidentif')).sendKeys('RUN');
        await driver.findElement(By.id('numerodocumentoidentif')).sendKeys('35970098');
        await driver.findElement(By.id('email')).sendKeys(email);
        await driver.findElement(By.id('confirmemail')).sendKeys(email);
        await driver.findElement(By.id('phone1')).sendKeys(tel1);
        await driver.findElement(By.id('phone2')).sendKeys(tel2);
        await driver.findElement(By.id('phone3')).sendKeys(tel3);
        await driver.findElement(By.id('region1')).sendKeys('A');
        await driver.findElement(By.id('comuna1')).sendKeys('AA');
        await driver.findElement(By.id('establecimiento')).sendKeys('C');
        await driver.findElement(By.name('contactopersonaenferma')).sendKeys(negativo);
        await driver.findElement(By.id('enfermo30dias')).sendKeys(negativo);
        await driver.findElement(By.name('sintomasNone')).click();
        await driver.findElement(By.id('checkbox_final')).click();

        //await driver.findElement(By.id('submit')).click();

    } finally {
        driver.quit();
    }
})();

/*

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

        let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        console.log(await firstResult.getAttribute('textContent'));*/