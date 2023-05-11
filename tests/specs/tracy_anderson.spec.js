const { test, expect } = require('@playwright/test');
const {Homepage} = require('../pageobjects/homepage');

test.describe('Tracy_anderson End to end flow for sign-up', ()=>{
    test('user should be able to load url', async ({page})=>{
        const homePage = new Homepage(page)
        await homePage.openUrl();
        await expect (homePage.$title).toBeVisible();
    })
    test('user should be able to click START COMPLIMENTARY MEMBERSHIP', async ({page})=>{
        const homePage = new Homepage(page)
        await homePage.openUrl();
        await homePage.onlineStudio();
        await homePage.START_COMPLIMENTARY_MEMBERSHIP();
      //  await expect (homePage.$title).toBeVisible();
    })
})