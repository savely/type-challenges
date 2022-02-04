/*
#10 Tuple to Union

  
  Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.
  
  For example
  
  ```ts
  type Arr = ['1', '2', '3']
  
  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
  
  > View on GitHub: https://tsch.js.org/10
*/

type TupleToUnion<T> =  T extends (infer P)[] ? P : never;
type TupleToUnion2<T> = T extends [infer P,...infer R] ? P | TupleToUnion<R> :never;
 
type a  = TupleToUnion2<[1,2,3,"a"]>