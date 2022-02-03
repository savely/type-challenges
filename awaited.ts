/*
#  189 - Awaited

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have `Promise<ExampleType>` how to get ExampleType?
  
  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)
  
  > View on GitHub: https://tsch.js.org/189

  
type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

*/

type Same<T1, T2> = T1 extends T2 ? (T2 extends T1 ? true : false) : false;  //doesnt work with readonly

type Equal<T1,T2> = <G>() => G extends T1 ? 1 : 2 extends <G>() => G extends T2 ? 1 : 2 ? true : false;
type Includes<T extends readonly any[], U> = T extends [infer First,... infer Rest] ? (Equal<First, U> extends true ? true  : Includes<Rest, U>) : false;