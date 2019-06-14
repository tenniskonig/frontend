import {browser, by, element} from 'protractor';

export class ViewHighscoresPage {
  getHighscoreutton() {
    return element(by.css('#btnHighscores'));
  }

  getHighscoreListTable() {
    return element(by.css('#highscoreListTable')).isPresent();
  }

  getHighscorePage() {
    return browser.baseUrl + '/Bestenliste';
  }
}
