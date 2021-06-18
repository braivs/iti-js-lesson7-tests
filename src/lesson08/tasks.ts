// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum( ...nums: Array<any>): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc,cur) => acc + cur)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    if (a + b < c || b + c < a || a + c < b) return  '00'
    else if (a === b && b === c && a === c) return '10'
    else if (a === b || b === c || a === c) return '01'
    else return '11'
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let result = number
      .toString()
      .split('')
      .map(e => Number(e))
    return result.reduce((acc,cur) => acc + cur)
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
  let oddNumbers = 0; // нечётные
  let evenNumbers = 0; // чётные
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? evenNumbers += arr[i] : oddNumbers += arr[i]
  }
  return evenNumbers > oddNumbers
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    const r = Math.sqrt(areaCr / Math.PI)
    const a = Math.sqrt(areaSq)
    return r <= a / 2
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const banknotesToGive = []
    let nominalIndex = 0
    for (let i = 0; i < banknotes.length; i++) {
      if (amountOfMoney <= 0) break
      while (amountOfMoney - banknotes[i] >= 0) {
        amountOfMoney -= banknotes[i];
        banknotesToGive.push(banknotes[i])
      }
    }
    return banknotesToGive
}