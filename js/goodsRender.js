import { refs } from './refs.js';
import { imgPath } from '../data.js';

export function getGoodsFromLS() {
    let goods = JSON.parse(localStorage.getItem('goodsId'));

    if (!goods) {
        refs.modalBasketInfo.textContent = 'Ви поки що нічого не обрали';
    } else if (goods) {
        refs.modalBasketInfo.textContent = 'Ви обрали:';
        goodsItem(goods);
    }
}
function goodsItem(arr) {
    let items = [];

    arr.map(el => {
        imgPath.find(dataEl => {
            dataEl.goods.find(goodsEl => {
                if (goodsEl.id === el) {
                    items.push(goodsEl);
                }
            });
        });
    });
    const count = quantityСalculation(items);
    const tPrice = countAdd(items, count).tPrice;

    refs.modalGoodsList.innerHTML = listGoodsForming(items, count);
    refs.totalPrice.innerHTML = `Встого до сплати ${tPrice} грн`;
}

function quantityСalculation(arr) {
    const count = arr.reduce((tally, el) => {
        tally[el.name] = (tally[el.name] || 0) + 1;

        return tally;
    }, []);

    return count;
}

function listGoodsTemplate(el) {
    const price = el.price * el.count;

    return `
<li class="modal__list-item" id = ${el.id}>
    <div class="modal__item">

        <img src="${el.imgPath}" alt="" class="goods__img" />
 <div class = "modal__count-info">
         <span>${el.count}шт</span>
         <div class = "modal__count-btn">
         <button class="modal__goods-quantity addition">+</button>
         <button class="modal__goods-quantity subtractor">-</button>
         </div>
        
        
  </div>
        <h4 class="modal__item-name" for="${el.id}">
            <p>${el.name}</p>     <span>
           ( ${el.count}шт. по ${el.price}грн)
            </span>
        </h4>
       
        <span class="modal__item-price"> ${price} грн</span>

    </div>
    
</li>
    `;
}
//зробить універсальну ф-ю
function listGoodsForming(items, count) {
    let list = [];
    const arr = countAdd(items, count).arr;

    arr.forEach(item => {
        const listItem = listGoodsTemplate(item);
        list.push(listItem);
    });
    return list.join('');
}
function countAdd(items, count) {
    const tPrice = totalPrice(items);

    for (let key in count) {
        items.find(item => {
            if (item.name === key) {
                item.count = count[key];
            }
        });
    }
    let arr = [];
    items.forEach(item => {
        if (!arr.includes(item)) {
            arr.push(item);
        }
    });

    return { arr, tPrice };
}

function totalPrice(items) {
    let totalPrice = 0;
    items.forEach(el => totalPrice = totalPrice + el.price);
    return totalPrice;
}
