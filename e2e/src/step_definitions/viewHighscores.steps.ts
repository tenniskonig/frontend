import {Before, Then, When} from 'cucumber';
import {ViewHighscoresPage} from '../pages/viewHighscoresPage.po';
import {expect} from 'chai';
import {browser} from 'protractor';

let page: ViewHighscoresPage;

Before(() => {
  page = new ViewHighscoresPage();
});

When(/^I click on element having id "btnHighscores"$/, async () => {
  page.getHighscoreutton().click();
});

Then(/^I am on the higscore page$/, async () => {
  expect(await browser.getCurrentUrl() === page.getHighscorePage());
});

Then(/^element having id "highscoreListTable" should be present$/, async () => {
  expect(await page.getHighscoreListTable());
});
