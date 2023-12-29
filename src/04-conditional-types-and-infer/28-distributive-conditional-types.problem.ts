import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// 1. Solution_1
type AppleOrBanana = Fruit extends infer F
  ? F extends "apple" | "banana"
    ? F
    : never
  : never;

// 2. Solution_2
type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana2 = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
type tests2 = [Expect<Equal<AppleOrBanana2, "apple" | "banana">>];
