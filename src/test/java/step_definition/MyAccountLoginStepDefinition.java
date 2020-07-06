package step_definition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.jsoup.select.Elements;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

import pagefactory.*;

public class MyAccountLoginStepDefinition {
	public WebDriver driver = null;
	Properties obj = new Properties();
	public Logger logger;

	@Before
	public void setup() {
		logger = logger.getLogger("EmployeesRestAPI");// added logger
		PropertyConfigurator.configure("log4j.properties");
		logger.setLevel(Level.DEBUG);
	}
	
	@After
	public void teardown()
	{
		driver.close();
	}
	

	@Given("^Open Browser$")
	public void open_Browser() throws Throwable {
		logger.info("********** Test Executing*************");
		FileInputStream objfile = new FileInputStream(
				"F:/Workspace for testing/Cucumber_Workspace/CucumberSDET/admin.properties");
		obj.load(objfile);

		String browser = obj.getProperty("browser");
		String driverlocation = obj.getProperty("driverlocation");

		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", driverlocation);
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		}

		else if (browser.equals("gecko")) {
			System.setProperty("webdriver.gecko.driver", driverlocation);
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
		}
		logger.info("********** Browser Started*************");
	}

	@When("^Enter the URL \"([^\"]*)\"$")
	public void enter_the_URL(String arg1) throws Throwable {
		driver.get("http://practice.automationtesting.in/");
		logger.info("********** Entered the URL*************");
	}

	@And("^Click the MyAccount Menu$")
	public void click_the_MyAccount_Menu() throws Throwable {
		PageFactory.initElements(driver, ElementsAttribute.class);
		ElementsAttribute.btn_Account.click();
		Thread.sleep(2000);
		logger.info("********** Clicked the My Account button*************");
	}

	@And("^Enter registered User name and Password$")
	public void enter_registered_User_name_and_Password() throws Throwable {
		try {

			ElementsAttribute.textBox_Username.sendKeys("pavanoltraining");
			ElementsAttribute.textBox_Password.sendKeys("Test@selenium123");
		} catch (NoSuchElementException e) {
			System.out.println("Handled exception");
		}
		logger.info("********** Entered Username and Password*************");
	}

	@And("^Click the Login button$")
	public void click_the_Login_button() throws Throwable {
		PageFactory.initElements(driver, ElementsAttribute.class);
		ElementsAttribute.btn_Login.click();
		logger.info("********** Clicked Login button*************");
	}

	@Then("^The user must Successfully login to the Webpage$")
	public void the_user_must_Successfully_login_to_the_Webpage() throws Throwable {
		try {
			String capText = driver.findElement(By.xpath("//*[@id='page-36']/div/div[1]/div/p[1]/strong")).getText();
			Assert.assertEquals(true, capText.contains("pavanoltraining"));

		} catch (NoSuchElementException e) {
			System.out.println("Handled");
		}
		logger.info("********** Successfully get login*************");
	}

}
