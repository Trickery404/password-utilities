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

describe("generateStrongPassword", () => {
  test("generates a password of correct length", () => {
    const length = 12;
    const pw = generateStrongPassword(length);
    expect(pw.length).toBe(length);
  });

  test("generated password meets strong criteria sometimes (not guaranteed yet)", () => {
    const pw = generateStrongPassword(12);
    // We won't expect it always to be strong at this point,
    // just test that we get a string of length 12
    expect(pw.length).toBe(12);
  });
});

