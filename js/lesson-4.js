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

// 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка
const tweets = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
{
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 10,
    tags: ["js", "nodejs", "react"],
  },
{
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 3,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];

const tweetslist = document.querySelector(".stats");

const markup = tweets.map(({ name, gender, likes, tags }) =>
    `<li class="stats-item ${gender}">
        <p class="stats-name">${name}</p>
        <p class="stats-likes">${likes} likes</p>
        <p class="stats-tags">${tags}</p>
      </li>`
)
    .join("");

tweetslist.innerHTML = markup;