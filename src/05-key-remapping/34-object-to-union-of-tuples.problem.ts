import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

// type Obj = {
//   [K in keyof Values]: [K, Values[K]];
// };

// type Keys = keyof Obj;

// type ValuesAsUnionOfTuples = Obj[Keys];

// Simplified version will be
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
