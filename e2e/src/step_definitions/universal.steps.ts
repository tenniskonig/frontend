import {Before, Given} from 'cucumber';

import {UniversalPage} from '../pages/universalPage.po';

let page: UniversalPage;

Before(() => {
  page = new UniversalPage();
});

Given(/^I am on the homepage$/, async () => {
  await page.navigateToHome();
});

Given(/^I am logged in$/, async () => {
  await page.navigateToLogin();
  await page.login();
});
