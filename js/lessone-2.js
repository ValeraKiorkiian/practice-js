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
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumElements(array) {
    const newArray = [];

    for (let i = 0; i < array.length-1; i++) {
        const currentElement = array[i];
        const nextElement = array[i + 1];
        newArray.push(currentElement + nextElement);
    }
    return newArray;
}
console.log(sumElements(someArr));
