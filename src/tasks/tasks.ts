export type StudentType = {
  name: string
  age: number
  isMarried: boolean
  scores: number
}

export type StudentWithFriendsType = {
  name: string
  age: number
  isMarried: boolean
  friends: Array<string>
  scores: number
}

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

// на занятии написали:
/*export const addFriends = (students: Array<StudentType>): Array<StudentType> => {
  const studentNames = students.map(st => st.name)
  return students.map(st => {
    const namesWithoutSt = studentNames.filter(name => name !== st.name)
    return {
      ...st,
      friends: namesWithoutSt
    }
  })
}*/

// ДЗ: написать тест на функцию
// создать тестовые данные, минимально 3х студентов
// это мой вариант, что раньше сам сделал
export const addFriends = (students: Array<StudentType>): Array<StudentWithFriendsType> => {
  let friends = students.map( st => st.name );
  let newStudents = students.map( st => {
    let friendsNoSelf = friends.filter(fr => st.name !== fr)
    return {...st, friends: friendsNoSelf}
  } )
  return newStudents;
}

// Вопрос: если сделать выходную типизацию Array<StudentType> то ок, даже если нет friends.
// Почему так.
