import { validateEmptyProperties } from "../src/validateEmptyProperties";

test("should return isValid false for empty string", () => {
  const result = validateEmptyProperties({
    email: "",
  });

  expect(result.isValid).toEqual(false);
  expect(result.errors).toContainEqual({
    key: "email",
    value: "",
  });
  expect(result.errors).toHaveLength(1);
});

test("should return isValid false for number 0", () => {
  const result = validateEmptyProperties({
    age: 0,
  });

  expect(result.isValid).toEqual(false);
  expect(result.errors).toContainEqual({
    key: "age",
    value: 0,
  });
  expect(result.errors).toHaveLength(1);
});

test("should return isValid false for undefined", () => {
  const result = validateEmptyProperties({
    username: undefined,
  });

  expect(result.isValid).toEqual(false);
  expect(result.errors).toContainEqual({
    key: "username",
    value: undefined,
  });
  expect(result.errors).toHaveLength(1);
});

test("should return isValid false for null", () => {
  const result = validateEmptyProperties({
    card: null,
  });

  expect(result.isValid).toEqual(false);
  expect(result.errors).toContainEqual({
    key: "card",
    value: null,
  });
  expect(result.errors).toHaveLength(1);
});

test("should return isValid false for 4 wrong properties", () => {
  const result = validateEmptyProperties({
    name: "Darvas",
    card: null,
    email: "",
    username: undefined,
    age: 0,
  });

  expect(result.isValid).toEqual(false);
  expect(result.errors).toContainEqual({
    key: "card",
    value: null,
  });

  expect(result.errors).toContainEqual({
    key: "email",
    value: "",
  });

  expect(result.errors).toEqual([
    {
      key: "card",
      value: null,
    },
    {
      key: "email",
      value: "",
    },
    {
      key: "username",
      value: undefined,
    },
    {
      key: "age",
      value: 0,
    },
  ]);
  expect(result.errors).toHaveLength(4);
});

test("should return isValid true when property is false", () => {
  const result = validateEmptyProperties({
    isVerified: false,
  });

  expect(result.isValid).toEqual(true);
  expect(result.errors).toHaveLength(0);
});
