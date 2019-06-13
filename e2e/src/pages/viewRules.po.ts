import { browser, by, element } from 'protractor';

export class ViewRulesPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getRuleButton() {
    return element(by.css('#btnRules'));
  }
  getRulesCard() {
    return element(by.css('#rules')).isPresent();
  }

  getRulesPage() {
    return browser.baseUrl + '/Regeln';
  }
}
