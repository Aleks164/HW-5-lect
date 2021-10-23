

const calc = require('./calc');
it('sum letters "weeqq" and "asdfw" equal "10"', () => {
	const consoleSpy = jest.spyOn(console, 'log');
	console.log(calc("weeqq","asdfw"));
	expect(consoleSpy).toHaveBeenCalledWith(10);
});