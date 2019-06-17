import {Before, Given, Then, When} from 'cucumber';

import {UniversalPage} from '../pages/universalPage.po';

let page: UniversalPage;

Before(() => {
  page = new UniversalPage();
});

Given(/^I am on the homepage$/, async () => {
  await page.navigateToHome();
});
