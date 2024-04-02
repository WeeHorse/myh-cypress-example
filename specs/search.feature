Feature: Search

  Scenario: Accept Cookies
    Given I am on the home page
    And I see a cookie prompt
    When I click the Accept button
    Then I should not see a cookie prompt

  Scenario: Find a specific term
    When I click in the search bar
    And I type "Systemutvecklare" followed by the Enter key
    Then I should see "Systemutvecklare" in the search results

