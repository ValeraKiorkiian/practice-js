// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const markup = document.createElement("ul");
// const btnAdd = document.createElement("button");
// const btnRemove = document.createElement("button");
// const input = document.createElement("input");
// document.body.append(input, btnAdd, btnRemove, markup);
// btnAdd.textContent = "Add";
// btnRemove.textContent = "Remove";
// btnAdd.addEventListener("click", event => {
//     const inputValue = input.value.trim();
//     if (inputValue === "") {
//         return;
//     }

//     const item = document.createElement("li");
//     item.textContent = inputValue;
//     markup.append(item);
//     console.log(markup.children)
//     if (markup.children.length % 2 === 0) {
//         item.style.backgroundColor = "yellow";
//     }
//     else {
//         item.style.backgroundColor = "lightblue";
//     }
//     input.value = "";
// })

// btnRemove.addEventListener("click", event => {
//     if (markup.lastChild) {
//         markup.lastChild.remove();
//     }
// })

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }
// const elem = document.createElement(`div`);
// document.body.append(elem);
// function changeElement() {
//   elem.style.cssText = forms[randomither(forms.length)];
//   elem.style.backgroundColor = getRandomHexColor();
//   elem.style.position = `absolute`;
//   elem.style.top = randomither(95) + `%`;
//   elem.style.left = randomither(95) + `%`;
// }

// elem.addEventListener(`click`, changeElement);

// changeElement();
