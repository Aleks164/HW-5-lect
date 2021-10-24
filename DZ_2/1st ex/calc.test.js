const calc = require('./calc');
it('6 is biger then 4 ', () => {
  console.log = jest.fn();
  calc(4,6);
  expect(console.log).toHaveBeenCalledWith(6);
});
