import {calculator, rest, sum} from './tasks';

/*test("sum of two number", () => {
  //1. Тестовые данные
  const a: number = 10
  const b: number = 8
  //2. Выполнение тестируемого кода с тестовыми данными
  const result = sum (a, b)
  //3. Проверка ожидаемого результата
  expect(result).toBe(18)
})*/

test("sum of two number short", () => {
  expect(sum(10,8)).toBe(18)
})

test("sum of several number", () => {
  expect(rest('s', true, 10,8)).toBe(18)
  expect(rest('s', true, 10,8,12)).toBe(30)
  expect(rest('s', true, 10,8,6,6,10,24)).toBe(64)
})

test('calculator', () => {
  expect(calculator(2,3,{type: 'sum'})).toBe(5)
  expect(calculator(2,3,{type: 'mult'})).toBe(6)
  expect(calculator(3,2,{type: 'div'})).toBe(1.5)
  expect(() => calculator(3,0,{type: 'div'})).toThrow()
  expect(calculator(2,3,{type: 'sub'})).toBe(-1)
})

export type StudentType = {
  name: string
  isStudent: boolean
  friends: Array<string>
}

export const addFriends = (students: Array<StudentType>): Array<StudentType> => {
  const studentNames = students.map(st => st.name)
  return students.map(st => {
    const namesWithoutSt = studentNames.filter(name => name !== st.name)
    return {
      ...st,
      friends: namesWithoutSt
    }
  })
}

// ДЗ: написать тест на функцию
// создать тестовые данные, минимально 3х студентов