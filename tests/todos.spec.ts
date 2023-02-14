import { test, expect } from "@playwright/test";

test.describe("todo page test cases", async () => {
	test.use({
		storageState: "storageState.json",
	});

	test.beforeEach(async ({ page }) => {
		await page.goto("https://qacart-todo.herokuapp.com/login");
	});

	test("mark a todo as completed", async ({ page }) => {
		await page.locator('[data-testid="add"]').click();
		await page.pause();
		await page
			.locator('[data-testid="new-todo"]')
			.fill("My First Automation To DO");
		await page.locator('[data-testid="submit-newTask"]').click();
		await page.locator('[data-testid="complete-task"]').nth(0).click();
		await expect(page.locator('[data-testid="todo-item"]').nth(0)).toHaveCSS(
			"background-color",
			"rgb(33, 76, 97)",
		);
	});
	test("welcome message displayed", async ({ page }) => {
		await expect(page.locator('[data-testid="welcome"]')).toBeVisible;
	});
});
