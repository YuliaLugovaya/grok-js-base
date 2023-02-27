/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    let sum = 0;

    if (start > end && start > 0 && end > 0) {
        for (let i = start; i >= end; i--) {
            sum += i;
        }
        return sum;
    } else if (start < end && start > 0 && end > 0) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    } else if (start === end && start > 0 && end > 0) {
        sum = start;
        return sum;
    } else {
        return "Ошибка: отрицательное число"
    }

}

module.exports = sumOfIntegers
