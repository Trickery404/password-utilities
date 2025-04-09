// password-utilities.test.js

const { generateStrongPassword, isStrongPassword } = require("../src/index");

describe("isStrongPassword", () => {
  test("returns false for a weak password like 'Hello World'", () => {
    expect(isStrongPassword("Hello World")).toBe(false);
  });

  test("returns true for a known strong password like 'pC%mD8TpCKn2'", () => {
    expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
  });
});

describe("generateStrongPassword (fixed)", () => {
  test("always returns a strong password of given length", () => {
    const length = 12;
    const pw = generateStrongPassword(length);
    expect(pw.length).toBe(length);
    expect(isStrongPassword(pw)).toBe(true);
  });
});

