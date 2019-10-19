const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('Credit card system', async () => {

  let browser;
  let page;

  test('title loads correctly', async () => {

    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1280,
        height: 768
      },
      userAgent: ''
    });


    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.container > h2');

    const html = await page.$eval('.container > h2', e => e.innerHTML);
    expect(html).toBe('Credit Card System');

  }, 16000);

  test('save record and display', async () => {
    const d = new Date()
    const limit = Date.parse(d.toString());
    let input = await page.$(`#name`);
    await input.type("BIG J");

    input = await page.$(`#number`);
    await input.type("3535631613104305205");

    input = await page.$(`#limit`);
    await input.type(limit.toString());

    await page.click("button");
    await page.waitFor(2000)
    let html = await page.$eval('tr:last-child > td:last-child', e => e.innerHTML);
    expect(html).toBe(`£${limit}`);

    html = await page.$eval('#name', e => e.innerHTML);
    expect(html).toBe(``);

    html = await page.$eval('#number', e => e.innerHTML);
    expect(html).toBe(``);

    html = await page.$eval('#limit', e => e.innerHTML);
    expect(html).toBe(``);

  }, 16000);

  test('validate empty inputs', async () => {
    await page.click("button");
    await page.waitFor(2000)

    let html = await page.$eval('tr:last-child > td:last-child', e => e.innerHTML);
    expect(html).not.toBe(`£`);

    html = await page.$eval('.text-danger:nth-child(4)', e => e.innerHTML);
    expect(html).toBe(`name should not be empty`);

    html = await page.$eval('.text-danger:nth-child(5)', e => e.innerHTML);
    expect(html).toBe(`number should be a valid credit card number`);

    html = await page.$eval('.text-danger:nth-child(6)', e => e.innerHTML);
    expect(html).toBe(`limit should be a valid number`);

  }, 16000);

  test('validate invalid inputs', async () => {

    let input = await page.$(`#number`);
    await input.type("123456");

    input = await page.$(`#limit`);
    await input.type('something');

    await page.click("button");
    await page.waitFor(2000)

    let html = await page.$eval('tr:last-child > td:last-child', e => e.innerHTML);
    expect(html).not.toBe(`£123`);

    html = await page.$eval('.text-danger:nth-child(4)', e => e.innerHTML);
    expect(html).toBe(`name should not be empty`);

    html = await page.$eval('.text-danger:nth-child(5)', e => e.innerHTML);
    expect(html).toBe(`number should be a valid credit card number`);

    html = await page.$eval('.text-danger:nth-child(6)', e => e.innerHTML);
    expect(html).toBe(`limit should be a valid number`);

    html = await page.$eval('#name', e => e.value);
    expect(html).toBe(``);

    html = await page.$eval('#number', e => e.value);
    expect(html).toBe(`123456`);

    html = await page.$eval('#limit', e => e.value);
    expect(html).toBe(`something`);


    browser.close();
  }, 16000);

});