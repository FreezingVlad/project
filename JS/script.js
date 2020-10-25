"use strict";
// ReferenceError - ошибка ссилочного типу, те що ми не можемо зіслатися на не існуєчий обєкт
// let number = 4.6; //це буде цифровий тип данних

// console.log(-4/0);

// console.log('string' * 9);

// const person = "Alex"; // все що пишеться в "" - це буде "строчний тип данних"

// const persone = "5"; // якщо ми записуємо в кавичках цифру, то це буде строчний тип

// const bool = true; // це логічний тип данних, буде буде або False або True

// console.log(something); //цей тип називається "null" ТУТ буде ПОМИЛКА ReferenceError - ошибка ссилочного типу, те що ми не можемо зіслатися на не існуєчий об`єкт

// let und;
// console.log(und);

// const obj = {
//     name: "John",//name - свойство обєкту, John - значення обєкту
//     age: 25,
//     isMarried: false
// }; // те що в фігурних дужках це ОБ'ЄКТИ {}

// console.log(obj.name);


// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}]; //те що в квадратних дужках це МАСИВИ [].

// console.log(arr[1]); //нумерація начинається з 0

// alert("Hello");

// const result = confirm("are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "");
// console.log(typeof(answer));//вся інформація яка приходить від користовуча це буде СТРОКА

// const answers = [];

// answers[0] = prompt("Яке ваше ім'я", "");
// answers[1] = prompt("Яке ваше фамілія", "");
// answers[2] = prompt("Скільки вам років", "");

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = "toys";

// console.log(`http://someurl.com/${category}/5` );

// const user = "Ivan";

// alert (`Привет, ${user}`); // тут значок $ а потмі {} будуть заміняти +, якби на треба
// було писати пару ++, тобто виходить зручніше, але працює тільки в косих скобаках ''

console.log(4 + 5);

let incr = 10,
    decr = 10;

    // incr++; // инкримент для того щоб зменшувати код, інскрімент коли ми застосовуємо 
    // в постфіксній формі після console.log то він працювати не буде

    // --decr; // дикримент для того щоб зменшувати код, інкрімент коли ми застосовуємо в 
    // префіксній формі то він буде прцювати зразу в console.log

    console.log(incr++);
    console.log(--decr);

    console.log(5%2);

    console.log(2 + 2 * 2 != 8); // для того щоб щось зрівняти треба використовувати ==
    //  3 знаки === називаються строге равенство,

    // && - оператор "і"
    // || - оператор "ілі"
    // ! - оператор "заперечення"

    const isChecked = true,
          isClose = false;

    console.log(isChecked || !isClose);

