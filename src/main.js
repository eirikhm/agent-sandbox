import { z } from "zod";

const NameSchema = z.string().min(1);

export function greet(name) {
  return `Hello, ${NameSchema.parse(name)}!`;
}

function main() {
  console.log(greet("world"));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
