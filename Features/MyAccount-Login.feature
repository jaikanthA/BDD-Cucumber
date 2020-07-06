Feature: MyAccount-Login feature
Description: This feature file is to test login functionality

@Test1
Scenario: Login with valid Email id and Password
Given Open Browser
When Enter the URL "http://practice.automationtesting.in/"
And Click the MyAccount Menu
And Enter registered User name and Password
And Click the Login button
Then The user must Successfully login to the Webpage

@Test2
Scenario: Login with invalid Email id and Password
Given Open Browser
When Enter the URL "http://practice.automationtesting.in/"
And Click the MyAccount Menu
And Enter registered User name and Password
And Click the Login button
Then The user must Successfully login to the Webpage

@Test3
Scenario: Login with svalid Email id and Password
Given Open Browser
When Enter the URL "http://practice.automationtesting.in/"
And Click the MyAccount Menu
And Enter registered User name and Password
And Click the Login button
Then The user must Successfully login to the Webpage