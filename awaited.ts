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

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer A> ? A extends Promise<unknown> ? MyAwaited<A> : A : never