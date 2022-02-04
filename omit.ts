/*
#3 Omit

Implement the built-in `Omit<T, K>` generic without using it.
  
  Constructs a type by picking all properties from `T` and then removing `K`
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }

   > View on GitHub: https://tsch.js.org/3

*/


type MyOmit<T, K> = {[P in MyExclude<keyof T, K>] : T[P]}

interface Todo {
    title: string
    description: string
    completed: boolean
  }

type c = MyOmit<Todo, 'description'>;