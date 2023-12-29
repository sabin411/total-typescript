import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// type ProgramModeEnumMap = typeof programModeEnumMap;
// export type IndividualProgram =
//   | ProgramModeEnumMap["ONE_ON_ONE"]
//   | ProgramModeEnumMap["SELF_DIRECTED"]
//   | ProgramModeEnumMap["PLANNED_ONE_ON_ONE"]
//   | ProgramModeEnumMap["PLANNED_SELF_DIRECTED"];

// we can also do this an its be better way

type IndividualProgram = (typeof programModeEnumMap)[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
