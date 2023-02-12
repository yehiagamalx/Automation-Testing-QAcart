import { test, expect } from '@playwright/test';


test.describe('Login test cases', async() => {
    
    test('have the correct title', async({page})=> {
        await page.goto('https://qacart-todo.herokuapp.com/');
        await expect(page).toHaveTitle("QAcart Todo App - Login page") 
    })

    test('have the correct url', async ({page}) => {
        await page.goto('https://qacart-todo.herokuapp.com/login');
        await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/login") 
    })

    test('header text visible', async ({page}) => {
        await page.goto('https://qacart-todo.herokuapp.com/login');
        const header = page.locator("text=Login to Application")
        await expect(header).toBeVisible
    })


    test('header the correct text by class', async ({page}) => {
        await page.goto('https://qacart-todo.herokuapp.com/login');
        const header = page.locator(".header")
        await expect(header).toHaveText("Login to Application")
    })

    test('fill the email', async ({page}) => {
        await page.goto('https://qacart-todo.herokuapp.com/login');
        const emailfield = page.locator("#login")
        await emailfield.fill("yehia@yehia.com")
        await expect(emailfield).toHaveValue("yehia@yehia.com")
    })

    test('fill the password by cdd', async ({page}) => {
        await page.goto('https://qacart-todo.herokuapp.com/login');
        const passfield = page.locator('[data-testid="password"]')
        await passfield.fill("123456")
        // await page.pause()
        await expect(passfield).toHaveValue("123456")
    })

    test('fill the password by xpath', async ({page}) => {
        await page.goto('https://qacart-todo.herokuapp.com/login');
        const passfield = page.locator('//input[@data-testid="password"]')
        await passfield.fill("123456")
        await expect(passfield).toHaveValue("123456")
    })

    test('should be able to click on submit buttom', async ({page}) => {
        await page.goto('https://qacart-todo.herokuapp.com/login');

        await page.locator("#login").fill("hatem@example.com")

        await page.locator('//input[@data-testid="password"]').fill("123456")

        const submitBtn = page.locator('button:has-text("login")')
        await submitBtn.click();

        await expect(page).toHaveTitle("QAcart Todo App - Todos page")

    })
    
    
  
})