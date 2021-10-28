import calc from "./calc";
beforeEach(() => {
  calc();
});

it("the arithmetic mean of odd numbers from 1 to 50 is 25", () => {
  jest.spyOn(window, "prompt").mockReturnValue("50");
  const consoleSpy = jest.spyOn(console, "log");
  expect(consoleSpy).toHaveBeenCalledWith(25);
});
it("the arithmetic mean of odd numbers from 1 to 50 is 1", () => {
  jest.spyOn(window, "prompt").mockReturnValue("1");
  const consoleSpy = jest.spyOn(console, "log");
  expect(consoleSpy).toHaveBeenCalledWith(1);
});
it("the arithmetic mean of odd numbers from 1 to 0 is wrong", () => {
  jest.spyOn(window, "prompt").mockReturnValue("0");
  const consoleSpy = jest.spyOn(console, "log");
  expect(consoleSpy).toHaveBeenCalledWith("You entered incorrect data");
});
