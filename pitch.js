describe('to test the Pitchflow',function()
		{
			it('login to a application', function()
					{
				//browser.ignoreSynchronization: true,
				//browser.waitforAngularEnabled(false);
				browser.waitForAngularEnabled(false);
				browser.get('https://pitchflow.evalueserve.com/trial3');
			    
			
				element(by.id('userNameInput')).sendKeys("trial3_user@mypresentation.space");
				element(by.id('passwordInput')).sendKeys("!evalu3_3");
				
				element(by.id('submitButton')).click();	
				//browser.sleep(3000);
				
				});
		});