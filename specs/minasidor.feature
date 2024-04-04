Feature: Mina Sidor

  Scenario: Login
    Given I am on the login page
    When I login with my "<username>" and "<password>"
    Then I should be logged in

    Examples:
      | username | password    |
      | testuser | testpass    |
      | admin    | password123 |
