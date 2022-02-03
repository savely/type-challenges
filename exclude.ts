/*
#43 

Implement the built-in Exclude<T, U>
  > Exclude from T those types that are assignable to U

  ype cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]

  
  > View on GitHub: https://tsch.js.org/43
*/


/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T