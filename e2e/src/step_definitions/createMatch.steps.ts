import {Given, Then, When} from 'cucumber';
import {CreateMatchPage} from '../pages/createMatchPage.po';
import {expect} from 'chai';
import {browser} from 'protractor';

let page = new CreateMatchPage();

When(/^I click on element having id createMatch$/, async () => {
  await page.getCreateButton().click();
});

Then(/^I should be on the enterMatch page$/, async () => {
  expect(await browser.getCurrentUrl() === page.getCreateURL());
});

Then(/^element having id createMatchForm should be present$/, async () => {
  expect(await page.getCreateMatchForm());
});

Given(/^I am on the enterMatch page$/, async () => {
  await  page.navigateToCreateMatch();
});
