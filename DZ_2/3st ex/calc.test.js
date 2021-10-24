
const calc = require('./calc');

it('is able to put circle(10) inside square(15)', () => {
	expect(calc(10,15)).toBe("fits");
});
it('is able to put circle(10) inside square(15)', () => {
	expect(calc(10,10)).not.toBe("fits");
});
it('is able to put circle(10) inside square(15)', () => {
	expect(calc(10,10)).toBe("no it fits");
});

it('is able to put circle(10) inside square(15)', () => {
	expect(calc(5,15)).toBe("fits");
});
