/*
#8 Readonly 2

Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.
  
  `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```
  
  > View on GitHub: https://tsch.js.org/8

*/

type MyReadonly2<T, K extends keyof T = keyof T> = {readonly [P1 in K] : T[P1]} & {[P2 in Exclude<keyof T, K>] : T[P2]}

interface Todo1 {
    title: string
    description?: string
    completed: boolean
  }

  type t =  MyReadonly2<Todo1, "completed" | "title">;