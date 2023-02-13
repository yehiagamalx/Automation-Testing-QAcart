// import { request } from "@playwright/test";


// async function globalConfig() {
//     const requestContext = await request.newContext()
//     await requestContext.post('https://qacart-todo.herokuapp.com/api/v1/users/login')

//     await requestContext.storageState({
//         path: 'storageState.json'
//     })
// }

// export default globalConfig

import { chromium, expect } from "@playwright/test"

async function globalConfig() {
    
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://qacart-todo.herokuapp.com/login');
    await page.locator("#login").fill("hatem@example.com")
    await page.locator('//input[@data-testid="password"]').fill("123456")
    await page.locator('button:has-text("login")').click();
    await expect(page.locator('[data-testid="welcome"]')).toBeVisible()
    await page.context().storageState({ path: 'storageState.json'});
}

export default globalConfig