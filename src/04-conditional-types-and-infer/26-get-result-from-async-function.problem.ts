import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

// type InferPropsFromServerSideFunction<T> = T extends (
//   ...arg: any
// ) => infer TReturn
//   ? Awaited<TReturn> extends { props: infer TJson }
//     ? TJson
//     : never
//   : never;

// OR

type InferPropsFromServerSideFunction<T> = T extends (...arg: any) => Promise<{
  props: infer TProps;
}>
  ? TProps
  : never;

type Example = InferPropsFromServerSideFunction<typeof getServerSideProps>;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
