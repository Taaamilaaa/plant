import { refs } from './refs.js';
import {getGoodsFromLS} from "./goodsRender.js"

refs.serchBtn.addEventListener('click', modalOpen);
refs.basketBtn.addEventListener('click', modalOpen);

refs.modal.addEventListener('click', onBgClickModalClose);
refs.modalBasket.addEventListener('click', onBgClickModalClose);

refs.modalCloseBasket.addEventListener('click', onButtonClickBasketClose);
refs.modalCloseSerch.addEventListener('click', onButtonClickSerchClose);

function modalOpen(e) {
    if (e.currentTarget.className.includes('serch')) {
       openSerchModal()
    } else if (e.currentTarget.className.includes('basket')) {
       openBasketModal()
    }
}
function openSerchModal() {
     setTimeout(() => {
            refs.modal.style.transition = 'all 0.8s ease 0s';
            refs.modal.style.transform = 'translate(0)';
        }, 500);
        setTimeout(() => {
            refs.modal.style.backgroundColor = '#00000088';
        }, 1250);
}
function openBasketModal() {
     setTimeout(() => {
            refs.modalBasket.style.transition = 'all 0.8s ease 0s';
            refs.modalBasket.style.transform = 'translate(0)';
        }, 500);
        setTimeout(() => {
            refs.modalBasket.style.backgroundColor = '#00000088';
        }, 1250);
        getGoodsFromLS()
}
function onBgClickModalClose(e) {
    if (e.target.className === 'modal') {
        closeSerch();
    } else if (e.target.className === 'modal__basket') {
        closeBasket();
    }
}
function onButtonClickBasketClose(e) {
    if (e.currentTarget.className.includes('modal__close-basket')) {
        closeBasket();
    }
}
function onButtonClickSerchClose(e) {
        if (e.currentTarget.className.includes('modal__close-serch')) {
        closeSerch();
    }
}
function closeBasket() {
    setTimeout(() => {
        refs.modalBasket.style.backgroundColor = '#00000000';
    }, 500);
    setTimeout(() => {
        refs.modalBasket.style.transform = 'translate(120%)';
    }, 1250);
}
function closeSerch() {
    setTimeout(() => {
        refs.modal.style.backgroundColor = '#00000000';
    }, 500);
    setTimeout(() => {
        refs.modal.style.transform = 'translate(-120%)';
        refs.serchFormInput.value = null;
        refs.modalList.innerHTML = null;
        refs.modalInfo.textContent = '';
        refs.modalButttonsList.style.display = 'none';
    }, 1250);
}
