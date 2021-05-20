import {addFriends, calculator, rest, StudentType, sum} from './tasks';

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




test('add friends to students', () => {
  //1. Тестовые данные
  const students: Array<StudentType> = [
    {
      name: 'Bob',
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: 'Alex',
      age: 21,
      isMarried: true,
      scores: 90
    },
    {
      name: 'Nick',
      age: 20,
      isMarried: false,
      scores: 120
    },
  ];
  //2. Выполнение тестируемого кода с тестовыми данными
  let newStudents = addFriends(students)
  //3. Проверка ожидаемого результата
  expect(students).not.toEqual(newStudents)
  expect(newStudents[0].friends).toStrictEqual(["Alex", "Nick"])
  expect(newStudents[1].friends).toStrictEqual(["Bob", "Nick"])
  expect(newStudents[2].friends).toStrictEqual(["Bob", "Alex"])
})



