describe('learn advanced protractor',function()
{
	/*it('advanced concepts', function()

	{
		browser.get("https://www.upwork.com/");
		//actions for keyboard actions- The sequence will not be scheduled for execution until perform is called.
		browser.actions().mouseMove(element(by.model('ctrl.inputModel')).sendKeys("test")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
		{
			browser.sleep(3000);
		});
		
	})*/
	
	/*it('window handles', function()
	{
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
		element(by.id('openwindow')).click();
		browser.getAllWindowHandles().then(function(handles)
		{
			browser.switchTo().window(handles[1]);
			browser.getTitle().then(function(title)
			{
				console.log(title);
			})
			browser.switchTo().window(handles[0]);
			browser.getTitle().then(function(title)
					{
						console.log(title);
					})
		})
	})*/
	
	
	/*it('accept alert',function()
			{
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
		element(by.id('confirmbtn')).click();
		//browser.switchTo().alert().dismiss();
		browser.switchTo().alert().accept().then(function()
		{
			browser.sleep(10000);
		}		
		)
			})
			
	it('work on frames',function()
	{
		browser.waitForAngularEnabled(false);
	    browser.driver.manage().window().maximize();
		browser.get("http://www.qaclickacademy.com/practice.php");
		browser.switchTo().frame('courses-iframe');
		element(by.css("a[href*='sign_in']")).getText().then(function(text)
		{console.log(text);})	
	})*/
	
	it('working on synchronisation', function()
	{
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		element(by.css("a[href*='loadAjax();']")).click();
		var ec=protractor.ExpectedConditions;
		browser.wait(ec.invisibilityOf(element(by.css("img[id='loader']"))),8000);
		element(by.id('results')).getText().then(function(text)
				{
			console.log(text);
				})
		
	})

})
