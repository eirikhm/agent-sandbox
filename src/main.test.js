import { test } from "node:test";
import assert from "node:assert/strict";

import { greet } from "./main.js";

test("greet builds a greeting for a valid name", () => {
  assert.equal(greet("world"), "Hello, world!");
});

test("greet rejects an empty name", () => {
  assert.throws(() => greet(""));
});
