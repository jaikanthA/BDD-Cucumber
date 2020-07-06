package myTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features",
		glue="step_definition",
		strict=true,
		monochrome=true,
		format = {"html:test-output"},
		tags={"@Test1,@Test2"}
		)
public class TestRunner 
{

}
