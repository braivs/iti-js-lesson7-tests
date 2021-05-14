export function sum(a: number, b: number): number {
  return a + b
}
export function mult(a: number, b: number): number {
  return a * b
}

export function div(a: number, b: number): number {
  return a / b
}

export function sub(a: number, b: number): number {
  return a - b
}


export function rest(a: string, b: boolean, ...numbers: Array<number>) {
  return numbers.reduce((acc, el) => acc + el, 0)
}

export type ActionType = {type: 'sum' | 'mult' | 'div' | 'sub'}
export function calculator(a: number, b: number, action: ActionType) {
  switch (action.type) {
    case 'sum':
      return a + b;
    case 'sub':
      return a - b;
    case 'div':
      if (b === 0) {
        throw new Error('Divided by zero!!!')
      }
      return a / b;
    case 'mult':
      return a * b;
    default:
      return new Error('Unknown action')
  }


}