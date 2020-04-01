'use strict';
const sub = document.getElementById("submit");
const shadow = document.querySelector(".shadow-container");
sub.onclick = function () {
    shadow.innerHTML = "";
    let Tc = document.querySelector(".text-field").value;
    if(Tc === "" || isNaN(Tc)){
        return shadow.innerHTML = `<p>Введите число</p>`;
    }
    let Tf;
    Tf = (9 / 5) * Tc + 32;
    shadow.insertAdjacentHTML('afterbegin', `<p>Temperature in Celsius: ${Tf}</p>`);
};

//Задание 2;
let admin;
let name = "Василий";
admin = name;
console.log(admin);

//Задание 3;

console.log(10 + 10 + "10");
/*
сначала складываем числа, затем конкатенируем строку "10"
 */
console.log(10 + "10" + 10);
/*
число 10 конкатенируется со строкой "10" получается "1010"
а затем строка "1010" конкатенируется с числом 10 и получается снова строка
"101010"
 */
console.log(10 + 10 + +"10");
/*
сначала строка "10" становится числом за счёт унарного плюса,
затем все числа складываются и в консоль выводится число 30.
 */
console.log(10 / -"");
/*
пустая строка это 0, соответственно строка станет -0,
а 10 / -0 это -infinity.
 */
console.log(10 / +"2,5");
/*
"2,5" Это не число, при попытке привести к числу за счёт унарного плюса,
будет NaN и соответственно всё выражение становится NaN.
 */


//Задание 4;

/*
let mode = "normal"; - корректный
let my_valu3 = 102; - корректный
let 3my_value3 = "102"; - не корректный, начинается с цифры
let __hello__ = "world"; - корректный
let $$$ = "money"; - корректный
let !0_world = true; - не корректный, начинается с не поддерживаемого спецсимвола
 */