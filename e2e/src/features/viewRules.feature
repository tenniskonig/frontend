Feature: viewRules

  As a User
  I Want to read the rules of tenniskoenig

  Scenario: view the rules
    Given I am on the "homepage"
    When I click on element having id "btnRules"
    Then I should be on the "rulespage"
    And element having id "rules" should be present
