$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/CucumberTest.feature");
formatter.feature({
  "name": "Cucumber first test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cicd"
    }
  ]
});
formatter.scenario({
  "name": "First steps",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cicd"
    }
  ]
});
formatter.step({
  "name": "the user school name",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CucumberTestSteps.the_user_school_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user print the name",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CucumberTestSteps.the_user_print_the_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user print the last name",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CucumberTestSteps.the_user_print_the_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user print the city",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.CucumberTestSteps.the_user_print_the_city()"
});
formatter.result({
  "status": "passed"
});
});