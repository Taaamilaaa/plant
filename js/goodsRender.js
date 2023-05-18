import { refs } from "./refs.js";
import { imgPath } from "../data.js";


export function getGoodsFromLS(){
    let goods = JSON.parse(localStorage.getItem("goodsId"))

    if (!goods) {
        refs.modalBasketInfo.textContent = "Ви поки що нічого не обрали"
    } else if (goods) {
        refs.modalBasketInfo.textContent = "Ви обрали:"
        goodsItem(goods)
    }
}
function goodsItem(arr) {
    let items=[]
    imgPath.forEach(el => {
        
        el.goods.forEach(item => {
            if (arr.includes(item.id)) {
                items.push(item)
            }
         
      })
    })
    refs.modalGoodsList.innerHTML = listGoodsForming(items)
    
}
function listGoodsTemplate(el) {
     return `<li class="modal__list-item">

   <div class="modal__item">
  <img src=${el.imgPath} alt="" class = "goods__img">
      
   <label class="modal__item-name" for=${el.id}>
   <p>${el.name}</p>
   <span class="modal__item-price">${el.price} грн</span>
   </label>
   <button class="modal__goods-quantity addition">+</button> <button class="modal__goods-quantity subtractor">-</button>
   </div>
            </li>`;
}
//зробить універсальну ф-ю 
function listGoodsForming(items) {
    let list = [];
    items.forEach(item => {
        const listItem = listGoodsTemplate(item);
        list.push(listItem);
    });
    return list.join('');
}