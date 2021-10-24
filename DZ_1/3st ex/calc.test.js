

const calc = require('./calc');
it('if 123 then 6', () => {
  	jest.spyOn(window, "prompt").returnValue("123");
  	window.alert = jest.fn();
	const consoleSpy = jest.spyOn(console, 'log');
	console.log(window.alert);
	expect(consoleSpy).toHaveBeenCalledWith(6);
});