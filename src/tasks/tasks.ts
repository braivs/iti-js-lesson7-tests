export function sum(a: number, b: number) {
  return a + b
}

export function mult(a: number, b: number) {
  return a * b
}
export function div(a: number, b: number) {
  return a / b
}
export function sub(a: number, b: number) {
  return a - b
}

type ActionType = { type: 'sum' | 'mult' | 'div' | 'sub'}

export function calculator(a: number, b: number, action: ActionType) {
  switch (action.type) {
    case 'sum':
      return a + b
    case 'div':
      return a / b
    case 'mult':
      return a * b
    case 'sub':
      return a - b
    default:
      return 'Error of type action'
  }
}

type studentType = {
  name: string
  age: number
  isMarried: boolean
  friends: Array<string>
}

export function getDeepCopyStudent(arr: studentType) {
  return {...arr, friends: [...arr.friends]}
}
