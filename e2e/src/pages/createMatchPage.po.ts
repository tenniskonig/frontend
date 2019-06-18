import {browser, by, element} from 'protractor';

export class CreateMatchPage {

  getCreateButton() {
    return element(by.css('#createMatch'));
  }

  getCreateURL() {
    return (browser.baseUrl.toString() + '/SpielErstellen');
  }

  getCreateMatchForm() {
    return element(by.css('#createMatchForm')).isPresent();
  }

  navigateToCreateMatch() {
    return browser.get(browser.baseUrl + '/SpielErstellen') as Promise<any>;
  }
}
