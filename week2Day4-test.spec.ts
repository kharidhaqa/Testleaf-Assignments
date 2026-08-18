// Red Bus and Flipkart in Edge and Firefox Browser Instances (Week2.Day4)

import test, {chromium, firefox } from '@playwright/test'

test('launch Redbus in edge browser', async()=>{
    const mybrowser = await chromium.launch({channel: 'msedge', headless:false})
    const context1 = await mybrowser.newContext()
    const newpage = await context1.newPage()
    await newpage.goto('https://www.redbus.in/')
    await newpage.waitForTimeout(3000)
    console.log(await newpage.title())
    console.log(await newpage.url())

})

test('launch Flipkart in firefox browser', async()=>{
    const mybrowser1 = await firefox.launch({headless:false})
    const context2 = await mybrowser1.newContext()
    const newpage1 = await context2.newPage()
    await newpage1.goto('https://www.flipkart.com/')
    await newpage1.waitForTimeout(3000)
    console.log(await newpage1.title())
    console.log(await newpage1.url())

})