import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

// type SplitOrg<T extends string> = S.Split<T, "/">;

// type GetStringWithId<T extends Array<string>> = T[number] extends infer A
//   ? A extends `${string}${"id" | "Id"}${string}`
//     ? S.Split<A, ":">[1]
//     : never
//   : never;

// type ExtractPathParams<T extends string> = {
//   [K in GetStringWithId<SplitOrg<T>>]: string;
// };

// OR

type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] as K extends `:${infer ID}`
    ? ID
    : never]: string;
};

type Example = ExtractPathParams<UserOrganisationPath>;
type Example2 = ExtractPathParams<UserPath>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
