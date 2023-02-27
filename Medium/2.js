/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

const randomArr = () => {
    const min = 0;
    const max = 10;
    let arr = [];

    for(let i = 0; i < 10; i++){
      arr.push(Math.round(Math.random() * (max - min)) + min);
    }
    return arr;

}


module.exports = randomArr
