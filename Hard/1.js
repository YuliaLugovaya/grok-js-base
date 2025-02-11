/*

Создайте функцию, которая принимает в качестве аргументов три неотрицательных числа, 
а возвращает значение true («истина»), если три стороны могут сформировать треугольник,
и false («ложь») в противоположном случае.  
Каждое число представляет собой длину стороны треугольника. 

Пример: (3, 4, 5) => true  

Для начала пропиши аргументы функции.  

*/

const validTriangle = (a, b, c) => {
    let arr = [a, b, c];
    arr.sort(function (a, b) {
        return b - a;
    });

    if ((arr[1] + arr[2]) > arr[0]) {
        return true;
    } else {
        return false;
    }

}

module.exports = validTriangle
