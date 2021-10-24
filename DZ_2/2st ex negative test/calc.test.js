const calc = require('./calc');


it("if entered '1' then 'январь'", () => {
  jest.spyOn(calc(), "prompt").returnValue("1");
  expect(calc()).toHaveBeenCalledWith("январь");
});

