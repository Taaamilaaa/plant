import { refs } from './refs.js';
import { imgPath } from '../data.js';

//рендер карточок товарів при загрузці сторінки:

window.addEventListener('load', loadGoodsCards);

//шаблон карточки товару
const card = el => {
    return `<li class="plants__list-item">
                <div class="plants__item-img__container" style = "background-image: url(${el.imgPath})">

                </div>

                <div class="plants__item-contents">
                        <p class="plants__item-name">${el.name}</p>
                    <span class="plants__item-price">${el.price} грн</span>
                </div>
            </li>`;
};

//при загрузці виявляє currentTitle в майбутньому з локалсторейдж
function loadGoodsCards(e) {
    const currentTitle = refs.heroTitle.textContent.trim();
    imgPath.find(el => {
        if (el.name === currentTitle) {
            listOfCards(el.goods);
            return el;
        }
    });
}

//значення селекту
let flagValue = refs.select.value;

//формує список карточок товарів та підставляє його в html
export function listOfCards(list) {
    let item = [];
    const sortedList = sorter(list, flagValue);

    sortedList.forEach(el => {
        const listItem = card(el);
        item.push(listItem);
    });

    refs.plantsList.innerHTML = item.join('');
}

//вертає сортований масив елементів у відповідності з значенням селекту
const sorter = (allGoods, flagValue) => {
    let sortedGoods;

    switch (flagValue) {
        case 'cheaper':
            sortedGoods = allGoods.sort((a, b) => {
                return a.price - b.price;
            });
            break;
        case 'expensive':
            sortedGoods = allGoods.sort((a, b) => {
                return b.price - a.price;
            });
            break;
        case 'stock':
            sortedGoods = allGoods.filter(el => {
                if (el.stock === true) {
                    return el;
                }
            });

            break;
        case 'all':
            sortedGoods = allGoods;
            break;
    }

    return sortedGoods;
};

//додає слухача на селект
refs.select.addEventListener('change', sortGoodsCard);

//зміенює значення flagValue та сортує список елементів
function sortGoodsCard(e) {
    flagValue = e.currentTarget.value;

    const currentTitle = refs.heroTitle.textContent.trim();

    imgPath.forEach(el => {
        if (el.name === currentTitle) {
            listOfCards(el.goods);
        }
    });
}
