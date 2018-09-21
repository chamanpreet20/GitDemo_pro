describe('protractor demo exercise',function()
{
function select(product)
{
	element.all(by.tagName('app-card')).each(function(item) {
		item.element(by.css("h4 a")).getText().then(function(title)
		{
			if(title==product)
				{
				item.element(by.buttonText('Add')).click();
				}
		})
		
	})	
}


it('working on demo site', function()
	{
		browser.driver.manage().window().maximize();
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.name('name')).sendKeys("chaman");
		element(by.name('email')).sendKeys("chaman@gmail.com");
		element(by.css("input[type='password']")).sendKeys('password');
		
	element(by.id('exampleCheck1')).click();
	element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click().then(function()
	{
		browser.sleep(3000)
	}		
	)
	//element(by.id('inlineRadio2')).click();
	element.all(by.name('inlineRadioOptions')).get(0).click();
element(by.name('bday')).sendKeys('02/09/2018');
browser.sleep(3000);
//element(by.className('btn btn-success')).click();
element(by.buttonText('Submit')).click().then(function()
{
	expect(element(by.css("div[class*='alert-dismissible']")).getText()).toContain("Success");
});
element(by.name('name')).clear();
element(by.name('name')).sendKeys('c').then(function()
		{
	expect(element(by.css("div[class*='alert-danger']")).getText()).toContain("Name should be at least 2 characters");
		});


expect(element.all(by.css("div[class*='alert-danger']")).count()).toBe(1);

element(by.linkText('Shop')).click();
var Ec=protractor.ExpectedConditions;
browser.wait(Ec.visibilityOf(element(by.partialLinkText('Checkout'))),6000);
select("iphone X");
//browser.sleep(1000);
select("Samsung Note 8");
//browser.sleep(1000);
select("Blackberry");
//browser.sleep(1000);

element(by.partialLinkText('Checkout')).getText().then(function(count)
{
	var res=count.split("(");
	var getcount=res[1].trim().charAt(0);
	var intcount=Number(getcount);
	var add=intcount+1;
	console.log(add);
	//expect(res[1].trim().charAt(0)).toBe("3");
	//console.log(count);
	})
	

element(by.partialLinkText('Checkout')).click();
browser.sleep(3000);
/*var Exp=protractor.ExpectedConditions;
browser.wait(Exp.visibilityOf(element(by.partialLinkText('Remove'))),6000);*/
element.all(by.tagName('tbody')).each(function(item1)
		{
		item1.element(by.css("h4 a")).getText().then(function(phone_names)
	{
		console.log(phone_names);
		})
		})

	})

})