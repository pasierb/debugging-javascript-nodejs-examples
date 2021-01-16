const greet = require("./greet");

describe("greet", () => {
  it("should return personalized greeting", () => {
    expect(greet("You")).toEqual("Hello You!");
  });
});
