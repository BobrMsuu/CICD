package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber-html-report",
                "json:target/cucumber.json",},
        features = "src//test//resources//",//"src\\test\\resources",
        glue = "StepDefinitions",
        monochrome = true,
        dryRun = false,
        tags = {"@cicd"}

)
public class SmokeTestRunner {
    // I want to run all feature file or scenarios which have a smoke tag(annotation)
    //adding comments to see jenkins triggered
    //adding second command to test jenkins #2
    //3
}
