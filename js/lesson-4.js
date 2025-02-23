// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const markup = document.createElement("ul");
const btnAdd = document.createElement("button");
const btnRemove = document.createElement("button");
const input = document.createElement("input");
document.body.append(input, btnAdd, btnRemove, markup);
btnAdd.textContent = "Add";
btnRemove.textContent = "Remove";
btnAdd.addEventListener("click", event => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        return;
    }

    const item = document.createElement("li");
    item.textContent = inputValue;
    markup.append(item);
    console.log(markup.children)
    if (markup.children.length % 2 === 0) {
        item.style.backgroundColor = "yellow";
    }
    else {
        item.style.backgroundColor = "lightblue";
    }
    input.value = "";
})

btnRemove.addEventListener("click", event => { 
    if (markup.lastChild) {
        markup.lastChild.remove();
    }
})

