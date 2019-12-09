const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

const chrome = require('selenium-webdriver/chrome');
const screen = {
	width: 640,
	height: 480,
};


describe('TESTE', function() {
	
	this.timeout(30000);
	let driver;
	let vars;

	beforeEach(async function() {
		driver = await new Builder()
			.forBrowser('chrome')
			.build();
		vars = {};
	});
	
	afterEach(async function() {
		await driver.quit();
	});
	
	it('TESTE DE DENÚNCIA', async function() {
		await driver.get("http://localhost:3000/");
		await driver.findElement(By.css("#reportButton")).click();
		await driver.findElement(By.css("#reportTitle")).sendKeys("ZOADA DESGRAÇADA");
		await driver.findElement(By.css("#reportDescription")).sendKeys("Não consigo dormir direito, esses meninos da rua ao lado não deixam a gente em paz!!1!");
		await driver.findElement(By.css("#reportSubmitButton")).click();
	});
	
});