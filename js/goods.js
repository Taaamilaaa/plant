import { refs } from './refs.js';
import { imgPath } from '../data.js';

window.addEventListener('load', loadGoodsCards);

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

    list.forEach(el => {
        const listItem = card(el);
        item.push(listItem);
    });
    
    refs.plantsList.innerHTML = item.join('');
}
