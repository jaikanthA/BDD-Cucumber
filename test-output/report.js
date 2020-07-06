$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyAccount-Login.feature");
formatter.feature({
  "line": 1,
  "name": "MyAccount-Login feature",
  "description": "Description: This feature file is to test login functionality",
  "id": "myaccount-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 227423200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with valid Email id and Password",
  "description": "",
  "id": "myaccount-login-feature;login-with-valid-email-id-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the URL \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click the MyAccount Menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter registered User name and Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The user must Successfully login to the Webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.open_Browser()"
});
formatter.result({
  "duration": 10228242700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "MyAccountLoginStepDefinition.enter_the_URL(String)"
});
formatter.result({
  "duration": 8029075300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.click_the_MyAccount_Menu()"
});
formatter.result({
  "duration": 3239434400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.enter_registered_User_name_and_Password()"
});
formatter.result({
  "duration": 4469046900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.click_the_Login_button()"
});
formatter.result({
  "duration": 2598714400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.the_user_must_Successfully_login_to_the_Webpage()"
});
formatter.result({
  "duration": 603029500,
  "status": "passed"
});
formatter.after({
  "duration": 4228734300,
  "status": "passed"
});
formatter.before({
  "duration": 9524900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with invalid Email id and Password",
  "description": "",
  "id": "myaccount-login-feature;login-with-invalid-email-id-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter the URL \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click the MyAccount Menu",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter registered User name and Password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The user must Successfully login to the Webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.open_Browser()"
});
formatter.result({
  "duration": 7795298200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "MyAccountLoginStepDefinition.enter_the_URL(String)"
});
formatter.result({
  "duration": 7325966200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.click_the_MyAccount_Menu()"
});
formatter.result({
  "duration": 3284677400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.enter_registered_User_name_and_Password()"
});
formatter.result({
  "duration": 1787408700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.click_the_Login_button()"
});
formatter.result({
  "duration": 2148417000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinition.the_user_must_Successfully_login_to_the_Webpage()"
});
formatter.result({
  "duration": 696632100,
  "status": "passed"
});
formatter.after({
  "duration": 4455013000,
  "status": "passed"
});
});