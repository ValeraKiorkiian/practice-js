// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

let number = +prompt(`Введіть число`);
// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }
alert(number === 10 ? "Вірно" : "Невірно");
console.log(number);
