import { refs } from './refs.js';
import { imgPath } from '../data.js';
import {addGoodsFromList} from './addGoodsToLS.js'

window.addEventListener('load', loadGoodsCards);
refs.select.addEventListener('change', sortGoodsCard);
let selectVal = refs.select.value;

export const cardTemplate = el => {
    return `<li class="plants__list-item" id=${el.id}>
              
                <div class="plants__item-img__container" style = "background-image: url(${el.imgPath})">
                </div>

                <div class="plants__item-contents">
                        <p class="plants__item-name">${el.name}</p>
                    <span class="plants__item-price">${el.price} грн</span>
                </div>
                
            </li>`;
};

function loadGoodsCards(e) {
    const currentTitle = refs.heroTitle.textContent.trim();
    imgPath.find(el => {
        if (el.name === currentTitle) {
            listOfCards(el.goods);
            return el;
        }
    });
}

export function listOfCards(list) {
    let item = [];
    const sortedList = sorter(list, selectVal);

    sortedList.forEach(el => {
        const listItem = cardTemplate(el);
        item.push(listItem);
    });

    refs.plantsList.innerHTML = item.join('');
    const listItems = document.querySelectorAll('.plants__list-item')
    listItems.forEach(el => {
        el.addEventListener('click', addGoodsFromList)
    })
}

const sorter = (allGoods, selectVal) => {
    let sortedGoods;

    switch (selectVal) {
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

function sortGoodsCard(e) {
    selectVal = e.currentTarget.value;

    imgPath.forEach(el => {
        if (el.name === refs.heroTitle.textContent.trim()) {
            listOfCards(el.goods);
        }
    });
}
