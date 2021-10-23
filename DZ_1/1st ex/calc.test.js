// const calc = require('./calc');
// it('2 * 3 to equal 6 & 2 + 3 to equal 5', () => {
//   console.log = jest.fn();
//   calc(2,3);
//   expect(console.log).toHaveBeenCalledWith('6 5');
// });

const calc = require('./calc');
it('2 * 3 to equal 6 & 2 + 3 to equal 5', () => {
	const consoleSpy = jest.spyOn(console, 'log');
	console.log(calc(2,3));
	expect(consoleSpy).toHaveBeenCalledWith('6 5');
});