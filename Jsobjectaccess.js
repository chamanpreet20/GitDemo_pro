describe('learn protractor',function()
		{
	
	var obj=require('./Jsobject.js');
	beforeEach(function()
			{
				obj.getURL();
			}		
			)
			
		it('open browser',function()
				{
	 obj.firstname.sendKeys('4');
	  
	  //***changing operator by using chain locator***
		element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
		
	// ***getting all operator values by using 'all'***
		
		element(by.model('operator')).all(by.css("option")).getText().then(function(text)
				{
			console.log(text);
				});
	
		 obj.secondname.sendKeys('6').then(function(){		
		//***using promise and pausing browser	***
			 browser.sleep(10);
		 });
		 obj.Gobutton.click();
		 
				});
		
		 afterEach(function() {
			    console.log('test is completed');
			  });
				});
