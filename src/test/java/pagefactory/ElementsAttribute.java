package pagefactory;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ElementsAttribute {
	@FindBy(linkText="My Account")
	public static WebElement btn_Account;

	@FindBy(xpath="//input[@name='username']")
	public static WebElement textBox_Username;
	
	@FindBy(xpath="//input[@id='password']")
	public static WebElement textBox_Password;
	
	@FindBy(xpath="//input[@name='login']")
	public static WebElement btn_Login;
}

