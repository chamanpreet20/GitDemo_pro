exports.config = {
		 specs: ['practice-exercise.js'],

onPrepare :function()
{
			 browser.driver.manage().window().maximize();
}
		/*capabilities: {
			'browserName':'Chrome'}*/
//  seleniumAddress: 'http://localhost:4444/wd/hub',
 
};