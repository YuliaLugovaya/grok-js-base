/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (str) => {
    const indexSymbol = str.indexOf('_');
    const upperLetter = str.charAt(indexSymbol + 1).toUpperCase();
    return str.slice(0, indexSymbol) + upperLetter + str.slice(indexSymbol + 2, str.length);

}

module.exports = camelCase