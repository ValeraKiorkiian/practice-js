// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// // styles[1] = 'classic';

// const index = styles.indexOf('blues');
// styles[index] = 'classic';

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);

//     }
// }
// logItems(styles)

// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const name = prompt("Enter your name")
//     // for (const item of array) {
//     //     if (name === item) {
//     //         return alert(`Welcome, ${name}`)
//     //     }
//     // }
//     // alert('User not found')

//     alert(array.includes(name) ? `Welcome, ${name}` : 'User not found')
// }

// checkLogin(logins);

// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumElements(array) {
//     const newArray = [];

//     for (let i = 0; i < array.length-1; i++) {
//         const currentElement = array[i];
//         const nextElement = array[i + 1];
//         newArray.push(currentElement + nextElement);
//     }
//     return newArray;
// }
// console.log(sumElements(someArr));

// 7. Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = `happy`;
// user.hobby = "skydiving";
// user.premium = false;

// const userArr = Object.keys(user);
// for (const key of userArr) {
//   console.log(`${key}: ${user[key]}`);
// }

// 8. Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const salariesVal = Object.values(salaries);
// let sum = 0;
// for (const total of salariesVal) {
//   sum += total;
// }
// console.log(sum);


// 9. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргументи і зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножує збережені значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() зводити першу властивість у ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод


const calc = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        if (this.exist())
            return this.a + this.b;
        return `not values`;
    },
    mult() {
        if (this.exist())
            return this.a * this.b;
        return `not values`;
    },
    raise() {
        if (this.exist())
            return this.a ** this.b;
        return `not values`;
    },
    exist() {
            return this.a && this.b;
    }

}
// calc.read(4, 5);
console.log(calc.sum());
console.log(calc.mult());
console.log(calc.raise());
