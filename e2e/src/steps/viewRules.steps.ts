import {Before, Given, Then, When} from 'cucumber';
import {expect} from 'chai';

import {ViewRulesPage} from '../pages/viewRules.po';
import {browser} from 'protractor';

let page: ViewRulesPage;

Before(() => {
  page = new ViewRulesPage();
});

Given(/^I am on the "homepage"$/, async () => {
  await page.navigateTo();
});

When(/^I click on element having id "btnRules"$/, async () => {
  await page.getRuleButton().click();
});

Then(/^I should be on the "rulespage"$/, async () => {
  expect(await browser.getCurrentUrl() === page.getRulesPage());
});

Then(/^element having id "rules" should be present$/, async () => {
  expect(page.getRulesCard());
});
