import {browser, by, element} from 'protractor';

export class UniversalPage {
  navigateToHome() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToLogin() {
    return browser.get(browser.baseUrl + '/Login') as Promise<any>;
  }

  login() {
    // get Elements
    const username = element(by.css('#username'));
    const password = element(by.css('#password'));
    const submit = element(by.css('#submit'));

    // Fill in form
    username.sendKeys('tobias.fritz');
    password.sendKeys('jwtpass');

    // submit
    submit.click();
  }
}
