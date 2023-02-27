/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
    let arr = str.split('');
    return arr.forEach(function (el) {
        console.log(el);
    })

}

module.exports = logEachLetter