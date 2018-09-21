describe('learn protractor',function()
		{
	//***writing function and using outside It***
	function calc(a,b,c)
	{
		 element(by.model('first')).sendKeys(a);
			element(by.model('second')).sendKeys(b);
		//***if condition to select selected opertaor
			element.all(by.tagName("option")).each(function(item)
					{
					item.getAttribute("value").then(function(values)

					{
					//console.log(values);
					if(values==c)
						{
						item.click();
						}
				})
			})
		
		 
		 element(by.id('gobutton')).click();
	}
	
	it('open browser',function()
			{
		
	
	//browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/');
			
		 element(by.model('first')).sendKeys('4');
	  
	  //***changing operator by using chain locator***
		element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
		
	// ***getting all operator values by using 'all'***
		
		element(by.model('operator')).all(by.css("option")).getText().then(function(text)
				{
			console.log(text);
				});
	
		element(by.model('second')).sendKeys('6').then(function(){		
		//***using promise and pausing browser	***
			 browser.sleep(10);
		 });
		 element(by.id('gobutton')).click();
		 
		 
		 //***using css attribute***
			/*element(by.css("h2[class='ng-binding']")).getText().then(function(result){
				 
				 console.log(result);
				
			 });*/
		 
		 
		 calc(2,2,"ADDITION");
		 calc(3,1,"SUBTRACTION");
		 calc(3,3,"DIVISION");
		 
			//*** using jasmine assertion to match expected result***
		
			//expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('24');
	
		
		//***using css and fetching nth child***
			// expect(element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText()).toBe('24');
			
		//***using all and get count of all rows***
	/*	element(by.repeater('result in memory')).all(by.css("td")).count().then(function(count){
				console.log(count);
				
			});*/
		
		//***using 'each' function and get all values within loop***
			
			element.all(by.repeater("result in memory")).each(function(item) {
				item.element(by.css("td:nth-child(3)")).getText().then(function(text)		
				{
					console.log(text);
					
				})
								
			})
			
		
		//*** using 'first' to get first value***
		/*	element.all(by.repeater('result in memory')).first().element(by.css("td:nth-child(3)")).getText().then(function(text)
			{
				console.log(text);
			})*/
			
			//*** using 'last' to get last value***
			/*element.all(by.repeater('result in memory')).last().element(by.css("td:nth-child(3)")).getText().then(function(text)
			{
				console.log(text);
			})
			*/
			})
		})

//***using slice to get substring of string***
/*var name="chaman";
console.log(name.slice(1, 5));*/