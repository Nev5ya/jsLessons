'use strict';

//Задание 1

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
console.log(c);
/* Ответ: 2.
Изначально "c = undefined", затем "а" увеличивается на 1
и после значение присваивается в "с".
*/

//пример 2
d = b++;
console.log(d);
/* Ответ: 1.
Изначально "d = undefined",
в 'd' присвоится значение 'b',
и затем, за счёт постфиксной формы инкремента,
значение 'b' увеличивается на 1.
*/

//пример 3
c = 2 + ++a;
console.log(c);
/* Ответ: 5.
c = 2.
a = 2, затем переменная увеличивается на 1 за счёт префикса инкремента.
и складывается с 2, в итоге 5.
*/

//пример 4
d = 2+ b++;
console.log(d);
/* Ответ: 4.
d = 1. b = 2.
Значение 'b' прибавится к 2, а затем увеличится на 1 за счёт постфикса инкремента.
*/

console.log(a); // 3
console.log(b); // 3

//Задание 2

a = 2;
let x = 1+ (a *= 2);
console.log(x);
/* Ответ: 5.
Сначала производится вычисление в скобках т.е. a = a * 2,
a = 4. Затем прибавляется 1 и полученный результат присваивается в 'x'.
*/

//Задание 3

let button = document.querySelector(".task-3");

button.addEventListener('click', function () {

    a = Number(document.querySelector(".a").value);
    b = Number(document.querySelector(".b").value);

    let signA = Math.sign(a);
    let signB = Math.sign(b);

    if (signA >= 0 && signB >= 0){
        alert(`Разность: ${a - b}`);
    } else if (signA === -1 && signB === -1){
        alert(`Произведение: ${a * b}`);
    } else {
        alert(`Сумма: ${a + b}`);
    }
});

//Задание 4, 5

/*
Если у нас много одинаковых кнопок для разных форм, то как будет лучше?
Навешивать кучу доп классов, чтобы идентификация была по ним
или пользоваться id, а классы оставить для стилей. getElement или querySelector.
*/

function getAddiction(z, y){
    return z + y;
}
function getSubtraction(z, y){
    return z - y;
}
function getMultiplication(z, y){
    return z * y;
}
function getDivision(z, y){
    return z / y;
}

const submitTask4 = document.getElementById('task-4');

submitTask4.addEventListener('click',function () {
    const operation = document.getElementById('operation').value;

    const z = +document.querySelector('.z').value;
    const y = +document.querySelector('.y').value;

    switch (operation) {
        case "add":
            alert(`Сумма равна: ${getAddiction(z, y)}`);
            break;
        case "sub":
            alert(`Вычитание равно: ${getSubtraction(z, y)}`);
            break;
        case "mul":
            alert(`Умножение равно: ${getMultiplication(z , y)}`);
            break;
        case "div":
            alert(`Деление равно: ${getDivision(z, y)}`);
            break;
    }
});


//Задание 6

/**
 * Функция падежей. Функция с багом для числа 11.
 * @param x {number} - последнее число введённое пользователем.
 * @returns {string} - возвращает окончание для вывода пользователю.
 */
function caseReduct(x){
    switch (true) {
        case x === 1:
            return ' рубль';
        case x > 1 && x < 5:
            return ' рубля';
        default :
            return ' рублей';
    }
}

/**
 * Функция обработки.
 * Функция принимает строку, разбивает на массив.
 * Получает последний элемент этого массива, преобразует в число
 * и возвращает его в функцию падежей.
 * @param accPutValue {string} - строка от пользователя.
 * @returns {number} - возвращает последнее число массива.
 */
function sumProcessing(accPutValue){
    let sumArr = accPutValue.split("");
    const lastElement = sumArr[sumArr.length - 1];
    return caseReduct(Number(lastElement));
}

let accPutValue = prompt("Введите желаемую сумму к зачислению на ваш аккаунт:");
alert("Ваша сумма в " + accPutValue + sumProcessing(accPutValue) + " успешно зачислена");