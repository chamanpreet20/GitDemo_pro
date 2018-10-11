function car()
{
this.color='Red';
this.brand='BMW';
this.engine='turbo';
this.year='2010';
this.model=function()
{
console.log('Print 2020 model');	
}


/*var a=new car();
a.model();
console.log(a.engine);*/


this.firstname=element(by.model('first'));
this.secondname=element(by.model('second'));
this.Gobutton=element(by.id('gobutton'));

this.getURL=function()
{
	browser.get('http://juliemr.github.io/protractor-demo/');	
}
}
module.exports=new car();
