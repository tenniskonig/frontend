import {browser, by, element} from 'protractor';

export class UniversalPage {
  navigateToHome() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}
