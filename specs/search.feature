Feature: Search

  Scenario: Accept Cookies
    Given I am on the home page
    And I see a cookie prompt
    When I click the Accept button
    Then I should not see a cookie prompt

  Scenario Outline: Find a specific term
    When I click in the search bar
    And I type "<SearchTerm>" followed by the Enter key
    Then I should see "<SearchTerm>" in the search results

    Examples:
      | SearchTerm       |
      | Systemutvecklare |
      | Webbutvecklare   |
      | Testare          |
      | Programmerare    |

