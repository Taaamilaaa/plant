import { refs } from './refs.js';
import { imgPath } from '../data.js';
import { cardTemplate } from './goods.js';

refs.serchForm.addEventListener('submit', filterData);

function filterData(e) {
    e.preventDefault();
    let arr = [];

    if (refs.serchFormInput.value !== '' && refs.serchFormInput.value.trim().length > 2) {
        imgPath.forEach(element => {
            element.goods.filter(el => {
                if (el.name.includes(refs.serchFormInput.value)) {
                    arr.push(el);
                }
            });
        });
    }
    notification(arr);
}
function notification(elements) {
    console.log(elements);
    if (elements.length < 2) {
        refs.modalInfo.textContent = 'нічого не знайдено';
    } else if (elements.length > 2 && elements.length !== 0) {
        refs.modalInfo.textContent = `ми знайшли ${elements.length} збігів`;
        refs.modalList.innerHTML = listForming(elements);
    }
}

function listTemplate(el) {
    return `<li class="modal__list-item">

   <div class="modal__item">
<input class = "modal__checkbox" type="checkbox" name=${el.id} id=${el.id}>  
      
   <label class="modal__item-name" for=${el.id}>
   <p>${el.name}</p>
   <span class="modal__item-price">${el.price} грн</span>
   </label>
   
   </div>
            </li>`;
}
function listForming(items) {
    let list = [];
    items.forEach(item => {
        const listItem = listTemplate(item);
        list.push(listItem);
    });
    return list.join('');
}