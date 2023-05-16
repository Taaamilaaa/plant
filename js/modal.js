import { refs } from './refs.js';

refs.serchBtn.addEventListener('click', modalOpen);
refs.modal.addEventListener('click', modalClose);
refs.modalBtn.addEventListener('click', modalClose )

function modalOpen(e) {
    if (e.currentTarget.nodeName === 'BUTTON') {
        setTimeout(() => {
            refs.modal.style.transition = 'all 0.8s ease 0s';
            refs.modal.style.transform = 'translate(0)';
        }, 500);
        setTimeout(() => {
            refs.modal.style.backgroundColor = '#00000088';
        }, 1250);
    }
}
function modalClose(e) {
   
    if (e.target.className === 'modal' || e.currentTarget.className === 'modal__container-btn') {
        setTimeout(() => {
            refs.modal.style.backgroundColor = '#00000000';
        }, 500)
         setTimeout(() => {
          refs.modal.style.transform = 'translate(-120%)';
        }, 1250);
        
    }
}
